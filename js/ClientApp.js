  /* global React ReactDOM */
  var div = React.DOM.div
  var h1 = React.DOM.h1

  var MyTitle = React.createClass({
    render () {
      return (
        div(null,
          h1({
            style: {
              color: this.props.color
            }
          }, this.props.title)
        )
      )
    }
  })

  var MyTitleFact = React.createFactory(MyTitle)

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
      MyTitleFact({
        title: 'props',
        color: 'papayawhip'
      })

    )
  )

  ReactDOM.render(MyFirstComponent, document.getElementById('app'))
