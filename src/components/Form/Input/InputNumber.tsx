import AntdInputNumber, { InputNumberProps } from 'antd/lib/input-number';
import Form, { FormItemProps } from 'antd/lib/form';
import styles from './Input.module.scss';
import { capitalizeFirstLetter } from '@/common/utils/string';
import classNames from 'classnames';
import { MailOutlined } from '@/components/Icon';

const InputNumber: React.FC<InputNumberProps & FormItemProps & { loading?: boolean }> = ({
  // input
  size = 'middle',
  type,
  loading,
  // form item
  label,
  name,
  required,
  rules = [],
  ...rest
}) => {
  const icon = {
    email: <MailOutlined style={{ fontSize: '20px' }} />,
    // TODO: add more icon
  };

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `Please enter  ${label || capitalizeFirstLetter(name)}` },
      ...rules 
]}
    >
      <AntdInputNumber
        size={size}
        type={type}
        prefix={icon[type]}
        {...rest}
        className={classNames(styles.inputNumber, rest.className)}
      />
    </Form.Item>
  );
};

export default InputNumber;
