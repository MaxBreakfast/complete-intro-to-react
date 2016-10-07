/* global React ReactDOM */
var div = React.DOM.div
var MyTitle = require('./MyTitle')

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
