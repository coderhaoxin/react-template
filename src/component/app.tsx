
import DevTools from 'mobx-react-devtools'
import { onError } from 'mobx-react'
import React from 'react'

import Counter from './counter'

const App = () => {
  return (
    <>
      <DevTools />
      <Counter />
    </>
  )
}

export default App

onError(err => {
  console.error('global error')
  console.error(err)
})
