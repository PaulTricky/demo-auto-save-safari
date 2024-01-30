import { capitalizeFirstLetter } from '@/common/utils/string';
import Form, { FormItemProps } from 'antd/lib/form';
import Input from 'antd/lib/input';
import { TextAreaProps as AntdTextAreaProps } from 'antd/lib/input';

const { TextArea: AntdTextArea } = Input;

type TextAreaProps = AntdTextAreaProps &
  FormItemProps & {
    noMargin?: boolean;
    height?: number;
    resize?: any;
    messageRequired?: string;
  };

const TextArea: React.FC<TextAreaProps> = ({ label, name, required, messageRequired, noMargin, height, resize = 'vertical', ...rest }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: messageRequired ? messageRequired : `Please enter ${label || name?.replace('_', ' ')}` }]}
      className={noMargin && 'mb-0'}
    >
      <AntdTextArea
        style={{
          height: height || 'auto',
          resize: resize,
        }}
        {...rest}
      />
    </Form.Item>
  );
};

export default TextArea;
