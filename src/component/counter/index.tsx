
import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import glamorous from 'glamorous'

import Store from './store'

const Main = glamorous.main({
  color: 'blue',
})
const STORE:string = 'counter_store'

@inject(STORE)
@observer
class Counter extends Component<any, any> {
  render() {
    const store = this.props[STORE] as Store
    return (
      <Main>
        <span>
          { 'count:' + store.count }
        </span>
        <button onClick={() => store.add(3)}>add</button>
      </Main>
    )
  }
}

export default Counter
