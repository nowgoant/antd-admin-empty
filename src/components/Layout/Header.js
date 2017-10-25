import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.less'


const Header = ({ menu }) => {
  console.log(menu)
  return (
    <div className={styles.header}>
      Header
    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
}

export default Header
