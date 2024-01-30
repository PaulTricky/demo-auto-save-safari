import { ROUTE } from '@/common/constants/route';

import { AppTypes } from '@/types';
import Space from 'antd/lib/space';
import message from 'antd/lib/message';
import Form from 'antd/lib/form';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Typography } from '@/components/Typography';
import styles from './Otp.module.scss';
import OtpInput from 'react-otp-input';
import { useTimer } from 'react-timer-hook';
import { authActions } from '@/stores/auth';
import { useDispatch, useSelector } from '@/stores';
import Button from '../Button/Button';
import { appActions } from '@/stores/app';
import { profileActions } from '@/stores/profile';

const Otp = ({ onSubmit, onResend, email, onCallback, onCancel }) => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const time = new Date();
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: new Date(time.setSeconds(time.getSeconds() + 120)),
    autoStart: true,
  });

  const hideCodeExpires = minutes === 0 && seconds === 0;
  const canResend = hideCodeExpires;

  const formatedMinutes = minutes?.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  const formateSeconds = seconds?.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  const formattedExpires = `${formatedMinutes}:${formateSeconds}`;

  const onOtpChange = (e) => {
    setOtp(e);
  };

  const onResendCode = () => {
    if (!canResend) {
      return message.error(`Wait ${formattedExpires} to try again`);
    }

    onResend()
      .unwrap()
      .then((resp) => {
        const time = new Date();
        restart(new Date(time.setSeconds(time.getSeconds() + resp?.data?.next_in_seconds || 120)), true);
        message.success('A verification code has been re-sent to your email successfully');
      })
      .catch((err) => {
        if (err?.message) {
          message.error(err?.message);
        }
      });
  };

  const onFinish = async (values: AppTypes.ICodeOTP) => {
    if (values?.otp_code?.length === 6) {
      onSubmit(values)
        ?.unwrap()
        ?.then(() => {
          onCallback?.();
          router.push({
            // pathname: ROUTE.PROFILE,
            pathname: ROUTE.ONBOARDING,
          });
        })
        ?.catch((err) => {
          err?.message && message.error(err.message);
        });
    } else {
      setOtpError(true);
    }
  };

  const onSwitchAccount = () => {
    dispatch(appActions.onLogout());
    dispatch(profileActions.onLogout());
    router.push(ROUTE.SIGN_UP);
  };

  return (
    <div className={styles.otpWrapper}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className={styles.form}
      >
        <Space size={32} direction="vertical">
          <Space direction="vertical" size={24}>
            <Typography.Title level={1} className={styles.title}>
              Verify Account
            </Typography.Title>
            <Space direction="vertical" size={8}>
              <Typography color="var(--text-primary-color)" className={styles.text}>
                A verification code has been sent to <strong>{email}</strong> please enter the code below.
              </Typography>
              <Typography className="block" color="var(--text-primary-color)">
                <Typography.Link onClick={onSwitchAccount}>Use a different email</Typography.Link>
              </Typography>
            </Space>

            <Form.Item name="otp_code" className={styles.otpForm}>
              <OtpInput
                hasErrored={otpError}
                value={otp}
                onChange={onOtpChange}
                numInputs={6}
                inputStyle={styles.otp}
                containerStyle={styles.otpContainer}
                errorStyle={styles.otpError}
              />
            </Form.Item>

            <div className={styles.buttons}>
              <Button
                shape="round"
                type="primary"
                disabled={otp?.length !== 6}
                loading={loading[authActions.verifyEmailOTP.typePrefix]}
                htmlType="submit"
                block
              >
                Verify
              </Button>
            </div>

            {!hideCodeExpires && (
              <Space direction="vertical" size={8} className={styles.expires} align="center">
                <Space align="center">
                  <Typography color="var(--text-primary-color)" className={styles.text}>
                    Resend in:
                  </Typography>
                  <Typography color="var(--error-primary-color)">{formattedExpires}</Typography>
                </Space>
              </Space>
            )}
            {hideCodeExpires && (
              <Space direction="vertical" size={8} className={styles.expires} align="center">
                <Space align="center">
                  <Typography color="var(--text-primary-color)" className={styles.text}>
                    Resend in:
                  </Typography>
                  <Typography.Link onClick={onResendCode}>Resend OTP</Typography.Link>
                </Space>
              </Space>
            )}
          </Space>
        </Space>
      </Form>
    </div>
  );
};

export default Otp;
