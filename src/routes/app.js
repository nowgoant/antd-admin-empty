/* global window */
import React from 'react'
// import NProgress from 'nprogress'
import PropTypes from 'prop-types'
// import pathToRegexp from 'path-to-regexp'
import { connect } from 'dva'
import { Layout } from 'components'
import { config } from 'utils'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import '../themes/index.less'
import './app.less'

const { Header, Footer, styles } = Layout
const { openPages } = config

// let lastHref

const App = ({ children, dispatch, app, loading, location }) => {
  let { pathname } = location
  pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
  const { iconFontJS, iconFontCSS } = config
  // const href = window.location.href

  // if (lastHref !== href) {
  //   NProgress.start()
  //   if (!loading.global) {
  //     NProgress.done()
  //     lastHref = href
  //   }
  // }

  if (openPages && openPages.includes(pathname)) {
    return (<div>
      {children}
    </div>)
  }

  return (
    <div>
      <Helmet>
        <title>hihi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {iconFontJS && <script src={iconFontJS} />}
        {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />}
      </Helmet>

      <div className={styles.main}>
        <Header />
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
