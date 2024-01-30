import { LoadingOutlined, PhoneOutlined } from '@/components/Icon';
import React from 'react';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneNumber.module.scss';
import classnames from 'classnames';
import Form, { FormItemProps } from 'antd/lib/form';
import { isValidPhoneNumber } from 'libphonenumber-js';

const PhoneNumber: React.FC<PhoneInputProps & FormItemProps & { loading?: boolean; icon?: boolean }> = ({
  onChange,
  loading,
  icon,
  label,
  name,
  required,
  ...rest
}) => {
  const phoneValidator = async (_, value) => {
    if (!value) {
      if (required) {
        return Promise.reject('Phone number is required');
      } else {
        return Promise.resolve();
      }
    }

    if (!isValidPhoneNumber('+' + value || '')) {
      return Promise.reject('Invalid phone number');
    }
    return Promise.resolve();
  };

  return (
    <div className={classnames(styles.phone, styles.phoneIcon)}>
      <Form.Item
        label={label}
        name={name}
        rules={[
          {
            required: required,
            validator: phoneValidator,
          },
        ]}
      >
        <PhoneInput
          // onlyCountries={['us', 'ca', 'mx', 'gb', 'fr', 'de', 'es']}
          // disableSearchIcon
          // disableDropdown={true}
          country={'us'}
          // countryCodeEditable={false}
          onChange={onChange}
          {...rest}
        />
      </Form.Item>
      {icon ? <PhoneOutlined className={styles.icon} /> : <></>}
      {loading ? <LoadingOutlined className={styles.loading} style={{ fontSize: 18 }} spin /> : <></>}
    </div>
  );
};

export default PhoneNumber;
