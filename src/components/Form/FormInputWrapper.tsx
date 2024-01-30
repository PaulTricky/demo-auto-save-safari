import Space from 'antd/lib/space';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const FormInputWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Space direction="vertical" size={6}>
      {children}
    </Space>
  );
};

export default FormInputWrapper;
