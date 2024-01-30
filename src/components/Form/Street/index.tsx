import useSearchStreet from '@/common/hooks/useSearchStreet';
import { capitalizeFirstLetter } from '@/common/utils/string';
import Form, { FormInstance, FormItemProps, FormProps } from 'antd/lib/form';
import Select from 'antd/lib/select';
import { debounce } from 'debounce';
import React, { useState } from 'react';

interface IProps {
  form: FormInstance;
  coordinateName?: string | string[];
}

const FormStreet: React.FC<IProps & FormItemProps> = ({ coordinateName = 'coordinate', form, ...rest }) => {
  const { searchStreet, loading } = useSearchStreet();
  const [options, setOptions] = useState([]);
  const streetAllow = Form.useWatch([...coordinateName, 'level_1']);
  window.form = form;
  const onChange = (value: string) => {
    const parseValue = JSON.parse(value);

    const currentValue = form.getFieldValue(coordinateName);

    form.setFieldValue(coordinateName, {
      ...currentValue,
      lat: parseValue.lat,
      lng: parseValue.lng,
      formatted_address: parseValue.formatted_address,
      postal_code: parseValue.postal_code,
      country_code: parseValue.country_code,
      street: parseValue?.street,
      address_number: parseValue?.address_number,
    });
  };

  const onSearch = (value: string) => {
    if (!value) return;

    const coordinate = form.getFieldValue(coordinateName);

    const { level_1, level_2, level_3 } = coordinate || {};

    searchStreet({ level_1, level_2, level_3, keyword: value })
      .unwrap()
      .then((resp) => {
        if (resp.data.records?.length > 0) {
          setOptions(resp.data.records);
        } else {
          setOptions([]);
        }
      })
      .catch((e) => {
        setOptions([]);
      });
  };

  return (
    <Form.Item
      {...rest}
      rules={[{ required: rest.required, message: `Please enter ${rest.label || capitalizeFirstLetter(rest.name)}` }]}
    >
      <Select
        showSearch
        disabled={!streetAllow}
        placeholder="Select address"
        optionFilterProp="children"
        onChange={onChange}
        loading={loading}
        filterOption={false}
        onSearch={debounce(onSearch, 800)}
        options={options.map((opt) => ({
          label: [`${opt.address_number} ${opt.street}`, opt.level_3, opt.level_2, opt.level_1].join(', '),
          value: JSON.stringify(opt),
        }))}
      />
    </Form.Item>
  );
};

export default FormStreet;
