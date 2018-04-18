
import { Provider, observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { Component } from 'react'
import React from 'react'

import Store from './store'

const STORE:string = 'counterStore'

const Main = styled.main`
  color: blue
`

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

const store = new Store()

export default (): any => {
  return (
    <Provider counterStore={store}>
      <Counter />
    </Provider>
  )
}
