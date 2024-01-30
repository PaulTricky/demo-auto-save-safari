import { maxWeeklyHours, minWeeklyHours } from '@/common/constants/project';
import InputNumber from './InputNumber';
import { Form } from 'antd/lib';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

const WeeklyHourInput = ({ disabled = false, className = '', size = 'large' }) => {
  return (
      <InputNumber
        name='max_weekly_hour'
        disabled={disabled}
        min={minWeeklyHours}
        prefix={<></>}
        size={size as SizeType}
        placeholder="Max weekly hours"
        className={className}
        controls={false}
        rules={[
          {
            validator(rule, value, callback) {
              if(!value) return Promise.reject('Maximum weekly hours is required ' );
              if (value && value > maxWeeklyHours) return Promise.reject('Maximum weekly hours must be less than or equal to ' + maxWeeklyHours);
              return Promise.resolve()
            },
          },
        ]}
      />

  );
};

export default WeeklyHourInput;
