var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')


var MyFirstComponent = () => {
  return (
    <div>
      <MyTitle title='whatevs' color='rebeccapurple' />
      <MyTitle title='derp' color='mediumaquamarine' />
      <MyTitle title='extra derpderp' color='papayawhip' />
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
