import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import styles from './index.less'

function HomePage({ loading }) {
  console.log(loading)
  return (
    <div className={styles.content}>HomePage</div>
  )
}

HomePage.propTypes = {
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(HomePage)
