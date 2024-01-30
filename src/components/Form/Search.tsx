import AntdInput, { InputProps } from 'antd/lib/input';
import { SearchOutlined } from '../Icon';

type InputSearchProps = Omit<InputProps, 'type'> & {};

const InputSearch: React.FC<InputSearchProps> = ({ size = 'middle', ...rest }) => {
  return (
    <AntdInput
      size={size}
      type="text"
      {...rest}
      allowClear
      prefix={<SearchOutlined style={{ fontSize: '20px', color: '#919EAB' }} />}
    />
  );
};

export default InputSearch;
