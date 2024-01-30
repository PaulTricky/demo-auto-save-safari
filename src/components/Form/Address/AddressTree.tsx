import { useControlled } from '@/common/hooks/useControlled';
import IconArrowDropDown from '@/components/Icon/ArrowDropDown';
import Form, { FormItemProps } from 'antd/lib/form';
import TreeSelect, { TreeSelectProps } from 'antd/lib/tree-select';
import classnames from 'classnames';
import { ChangeEventExtra, DefaultOptionType } from 'rc-tree-select/lib/TreeSelect';
import React, { useEffect } from 'react';
import styles from './AddressTree.module.scss';

const getParentsKey = (triggerValue, tree: DefaultOptionType[], stack = []) => {
  let parentKeys = [];

  for (let a = 0; a < tree.length; a++) {
    const node = tree[a];

    let results = [node.title];
    let exit = false;

    if (node.value === triggerValue) {
      parentKeys = results;
      break;
    }

    if (triggerValue.includes(node.value)) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.value === triggerValue) {
          parentKeys = [...results, child.title];
          exit = true;
          break;
        }

        for (let j = 0; j < child.children.length; j++) {
          if (child.children[j].value === triggerValue) {
            parentKeys = [...results, child.title, child.children[j].title];
            exit = true;
            break;
          }
        }

        if (exit) {
          break;
        }
      }
    }

    if (exit) {
      break;
    }
  }
  // tree.forEach((node) => {

  //   // if (node.children && node.title) {
  //   //   if (node.children.some((item) => item.value === triggerValue)) {
  //   //     parentKeys = [...stack, node.title];
  //   //   } else {
  //   //     const childKeys = getParentsKey(triggerValue, key, node.children, [...stack, node.title]);
  //   //     if (childKeys.length > 0) {
  //   //       parentKeys = childKeys;
  //   //     }
  //   //   }
  //   // }
  // });

  return parentKeys;
};

export type AddressTreeProps = Omit<TreeSelectProps, 'onChange'> & {
  treeData: DefaultOptionType[];
  // Control
  value?: string[];
  defaultValue?: string[];
  onChange?: (selectedKeys: string[]) => void;
  placeholder?: string;
} & {
  formItemProps?: FormItemProps;
};

const AddressTree: React.FC<AddressTreeProps> = ({
  treeData,
  value: controlledValue,
  defaultValue,
  onChange,
  formItemProps,
  placeholder,
  ...rest
}) => {
  const { label, required } = formItemProps;
  const [value, setValue] = useControlled({
    controlledValue: controlledValue,
    initialValue: defaultValue,
    name: 'AddressTree.value',
  });

  const handleChange = (v, labelList, extra: ChangeEventExtra) => {
    if (extra.triggerValue) {
      const parentsKey = getParentsKey(extra.triggerValue, treeData);
      const selectedKeys = Array.from(new Set([...parentsKey]));

      setValue(selectedKeys);
      onChange?.(selectedKeys);
    }
  };

  useEffect(() => {
    if (!controlledValue) {
      setValue(undefined);
    }
  }, [controlledValue]);

  useEffect(() => {
    if (controlledValue) {
      setValue([controlledValue?.level_1, controlledValue?.level_2, controlledValue?.level_3]);
    }
  }, [controlledValue]);

  return (
    <>
      <Form.Item {...formItemProps} style={{ display: 'none' }} label={label}></Form.Item>
      <Form.Item label={label} rules={[{ required: required }]}>
        <TreeSelect
          {...(rest as TreeSelectProps)}
          multiple
          showArrow
          bordered
          allowClear
          showSearch
          placeholder={placeholder}
          className={classnames(styles.treeSelect)}
          suffixIcon={<IconArrowDropDown />}
          treeData={treeData}
          value={value}
          onChange={handleChange}
          onClear={() => setValue([])}
          treeDefaultExpandAll={false}
          showCheckedStrategy="SHOW_ALL"
          // filterTreeNode={(search, item) => {
          //   return item?.value?.toLowerCase().includes(search?.toLowerCase());
          // }}
        />
      </Form.Item>
    </>
  );
};

export default AddressTree;
