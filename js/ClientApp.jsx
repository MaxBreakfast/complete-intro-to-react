const React = require('react')
const { Provider } = require('react-redux')

const Layout = require('./Layout')

const { store } = require('./Store')

const { Router, browserHistory } = require('react-router')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], (error) => {
        if (error) {
          return console.error('ClientApp Landing require.ensure error', error)
        }
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          if (error) {
            return console.error('ClientApp Landing require.ensure error', error)
          }
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          if (error) {
            return console.error('ClientApp Landing require.ensure error', error)
          }
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router routes={rootRoute} history={browserHistory} />
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
