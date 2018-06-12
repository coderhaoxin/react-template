
import { observable } from 'mobx'

const store = observable({
  count: 0,

  add (num = 1) {
    this.count += num
  }
})

export default store
