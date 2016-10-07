var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({
      title: 'props are great',
      color: 'rebeccapurple'
    }),
    MyTitleFact({
      title: 'use props everywhere',
      color: 'mediumaquamarine'
    }),
    ce(MyTitle, {
      title: 'props',
      color: 'papayawhip'
    })

  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
