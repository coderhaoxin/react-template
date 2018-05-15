
import { Provider, observer, inject } from 'mobx-react'
import styled from 'styled-components'
import React, { Component } from 'react'

import Store from './store'

const STORE: string = 'counterStore'

const Main = styled.main`
  color: blue
`

@inject(STORE)
@observer
class Counter extends Component<any, any> {
  add () {
    store.add(3)
  }

  render () {
    const store = this.props[STORE] as Store
    return (
      <Main>
        <span>
          {'count:' + store.count}
        </span>
        <button onClick={this.add}>add</button>
      </Main>
    )
  }
}

const store = new Store()

export default (): any => {
  return (
    <Provider counterStore={store}>
      <Counter />
    </Provider>
  )
}
