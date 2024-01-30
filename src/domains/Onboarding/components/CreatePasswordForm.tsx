import Card from 'antd/lib/card';
import Typography from 'antd/lib/typography';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';

import styles from '../Onboarding.module.scss';

import { useState } from 'react';
import Checkbox from '@/components/Form/Checkbox';
import classnames from 'classnames';
import { profileActions } from '@/stores/profile';
import { AppTypes } from '@/types';
import {  SEGMENT_EVENT } from '@/common/constants/segment';
import Button from '@/components/Button/Button';

const LIST_VALIDATION_PASSWORD: {
  label: string;
  validate?: (value?: string) => boolean;
}[] = [
  {
    label: 'one lowercase character',
    validate: (value?: string) => /[a-z]/.test(value),
  },
  {
    label: 'one special character',
    validate: (value?: string) => value?.includes('_') || /(?=.*[^\w_])/.test(value),
  },
  {
    label: 'one uppercase character',
    validate: (value?: string) => /[A-Z]/.test(value),
  },
  {
    label: '8 character minimum',
    validate: (value?: string) => /.{8,}/.test(value),
  },
  {
    label: 'one number',
    validate: (value?: string) => /[0-9]/.test(value),
  },
];

const CreatePasswordForm: React.FC<any> = ({ onNextStep, isTestAutoSaved }) => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState(form.getFieldValue('password') || '');

  const onFinish = (values: Pick<AppTypes.IUser, 'password'>) => {
    // console.log('E >>> ' + form.getFieldValue('password'));
    try {
      const validationPassed = LIST_VALIDATION_PASSWORD.every((item) => item.validate?.(values.password));
      if (validationPassed) {
        // dispatch(profileActions.updateMe(values)).then(() => {
        // } );
        onNextStep()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderListValidationPassword = () => {
    return (
      <Row gutter={[8, 7]}>
        {LIST_VALIDATION_PASSWORD?.map((item) => {
          return (
            <Col className={styles.formValidate} md={12} xs={24} key={item.label}>
              <Checkbox
                className={classnames([
                  styles.checkbox,
                  item?.validate(password) ? styles.activeCheckbox : styles.defaultCheckbox,
                ])}
                checked
              />
              <Typography className={styles.formLabelValidate}>{item.label}</Typography>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <div className={classnames([styles.createPasswordCard])}>
      <Typography className={'fw-600 fs-30 pre-line'} color="#0E0F0C">
        Create your password
      </Typography>

      <Form layout="vertical" form={form} onFinish={onFinish}>
        <div className={styles.createPasswordForm}>
       {isTestAutoSaved &&  <Form.Item
          label="Email"
          name="email"
        >
          <Input
            placeholder="Email"
            type="email"
          />
        </Form.Item>}
          <Form.Item
            label="Create Password"
            name="password"
            rules={[{ required: true, message: 'Please enter a valid password!' }]}
          >
            <Input.Password
              placeholder="Create a password"
              type="password"
              onChange={(e) => setPassword(e?.target?.value)}
            />
          </Form.Item>
          {renderListValidationPassword()}

          <Button
            type="primary"
            className="btn w-full"
            htmlType="submit"

          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePasswordForm;
