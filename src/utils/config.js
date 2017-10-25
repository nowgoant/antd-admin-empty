const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: '名称',
  prefix: 'jr',
  footerText: '版权信息',
  logo: '/logo.png',
  iconFontCSS: '',
  iconFontJS: '',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
  },
}
