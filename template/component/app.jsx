
import DevTools from "mobx-react-devtools"
import glamorous from 'glamorous'
import React from 'react'

import Model from './store'

const store = new Model()

const Main = glamorous.main({
  color: 'blue',
})

const App = (props) => {
  return (
    <>
      <DevTools />
      <Main>
        { 'count:' + store.count }
      </Main>
    </>
  )
}

setInterval(() => {
  store.add(3)
}, 1200)

export default App

window.store = store
