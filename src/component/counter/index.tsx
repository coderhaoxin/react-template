
import { Provider, observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import glamorous from 'glamorous'

import store from './store'

const Main = glamorous.main({
  color: 'blue',
})

@inject(stores => ({ count: stores.counterStore.count }))
@observer
class CounterComponent extends Component {
  render() {
    return (
      <Main>
        <span>
          { 'count:' + this.props.count }
        </span>
        <button onClick={() => store.add(3)}>add</button>
      </Main>
    )
  }
}

const Counter = () => (
  <Provider counterStore={store}>
    <CounterComponent />
  </Provider>
)

export default Counter
