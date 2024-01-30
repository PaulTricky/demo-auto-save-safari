import Tag from '@/components/Tag';
import Input, { InputProps } from 'antd/lib/input';
import styles from './Input.module.scss';
import React, { useEffect } from 'react';

type TagInputProps = Omit<InputProps, 'value' | 'onChange'> & {
  data?: string[];
  value?: string[];
  onChange?: (string: string[]) => void;
  onSelect?: (string: string[]) => void;
};

const TagInput: React.FC<TagInputProps> = ({ value, data, onSelect, ...rest }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [values, setValues] = React.useState<string[]>(value || []);

  const handleDeleteTag = (tagName: string) => {
    const newData = values?.filter((item) => item !== tagName);
    setValues(newData);
    onSelect?.(newData);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!values?.some((item) => item === inputValue) || values?.length === 0) {
      const newData = [...values, inputValue];
      setValues(newData);
      onSelect?.(newData);
    }
    setInputValue('');
  };

  // useEffect(() => {
  //   if (value?.length >= 0 && typeof value === 'object') {
  //     setValues(value || []);
  //   }
  // }, [value]);

  useEffect(() => {
    if (data?.length >= 0 && typeof data === 'object') {
      setValues(data || []);
    }
  }, [data]);

  return (
    <Input
      {...rest}
      value={inputValue}
      onPressEnter={handleEnterPress}
      onChange={(e) => setInputValue(e.target.value)}
      prefix={values?.map((tagName) => (
        <Tag
          key={tagName}
          className={styles.inputTagItem}
          closable={!rest?.readOnly}
          onClose={() => handleDeleteTag(tagName)}
        >
          {tagName}
        </Tag>
      ))}
    />
  );
};

export default TagInput;
