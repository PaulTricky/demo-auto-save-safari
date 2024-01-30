import Form, { FormItemProps } from 'antd/lib/form';
import AntdInput, { InputProps } from 'antd/lib/input';
import styles from './Input.module.scss';
import classNames from 'classnames';
import { LoadingOutlined, MailOutlined } from '@/components/Icon';

const Input: React.FC<InputProps & FormItemProps & { loading?: boolean }> = ({
  // input
  size = 'middle',
  type,
  loading,
  // form item
  label,
  name,
  required,
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
      rules={[{ required, message: `Please enter ${label || name?.replace('_', ' ')}` }]}
    >
      <AntdInput
        size={size}
        type={type}
        prefix={icon[type]}
        suffix={loading ? <LoadingOutlined style={{ fontSize: 18 }} spin /> : <></>}
        {...rest}
        className={classNames(styles.input, rest.className)}
      />
    </Form.Item>
  );
};

export default Input;
