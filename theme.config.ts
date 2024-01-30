import { ThemeConfig } from 'antd/lib/config-provider';

export const theme: ThemeConfig = {
  token: {
    controlHeightSM: 36,
    controlHeight: 40,
    controlHeightLG: 50,
    controlHeightXS: 32,

    colorPrimary: '#AF0000',
    colorError: '#DC2626',
    colorSuccess: '#1CA710',
  },
  components: {
    Modal: {
      borderRadius: 16,
      borderRadiusLG: 16,
    },
    Collapse: {
      colorFillAlter: '#f7f5f4',
    },
    Tag: {
      colorFillQuaternary: '#ececec',
    },
    Tooltip: {
      colorBgDefault: '#fff',
    },
    Input: {
      borderRadius: 12,
      colorFillAlter: '#fff',
    },
    Button: {
      borderRadius: 6,
      colorBgContainer: '#fff',
      boxShadow: 'none',
      colorBorder: 'transparent',
    },
    Typography: {
      fontSize: 14,
      padding: 0,
      margin: 0,
      colorLink: 'var(--main-primary-color)',
      colorLinkHover: 'var(--main-primary-color)',
      colorLinkActive: 'var(--main-primary-color)',
      linkDecoration: 'underline',
      colorError: '#AF0000',
    },
    Layout: {
      colorBgBody: 'var(--screen-color)',
      colorBgHeader: 'var(--white-color)',
      colorInfoBg: 'red',
    },
    Menu: {
      colorBgBase: 'var(--white-color)',
      colorItemBg: 'var(--white-color)',
      colorItemText: 'var(--gray-700-color)',
      colorItemTextSelected: 'var(--gray-700-color)',
    },
    Radio: {
      colorPrimary: '#AF0000',
    },
    Table: {
      borderRadiusLG: 0,
    },
    Divider: {
      colorSplit: 'var(--divider-color)',
      marginLG: 0,
    },
    Steps: {
      colorPrimary: 'var(--main-primary-color)',
    },
    Rate: {
      marginXS: 4,
    },
    Card: {
      borderRadiusLG: 24,
      borderRadiusSM: 16,
      colorBorderSecondary: '#E0D5D5',
    },
    Select: {
      borderRadius: 12,
    },
  },
};
