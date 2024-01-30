import { handleValidateUrl, personalLinks } from '@/common/constants/user';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import styles from './PersonalLinksStyles.module.scss';

const PersonalLinksForm = () => {
  return (
    <Form.List name="personal_links">
      {(fields) =>
        personalLinks.map((link, index) => (
          <>
            <Form.Item name={[index, 'type']} className="hidden mb-0">
              <Input defaultValue={link.name} placeholder={link.placeholder} />
            </Form.Item>
            <Form.Item
              key={index}
              name={[index, 'link']}
              label={
                <div className={styles.personalLinks}>
                  <span className={styles.linkIcon} children={link.icon} />
                  <span className={styles.linkLabel} children={link.label} />
                </div>
              }
              rules={[
                {
                  validator(rule, value, callback) {
                    const error = handleValidateUrl(value, link.name)
                    if(error) return Promise.reject(error)
                    else return Promise.resolve()
                  },
                },
              ]}
            >
              <Input placeholder={link.placeholder} />
            </Form.Item>
          </>
        ))
      }
    </Form.List>
  );
};

export default PersonalLinksForm;
