
import { observable, action } from 'mobx'

class Store {
  constructor() {
    this.count = 0
  }

  @observable public count: number

  @action
  add = (num?: number): void => {
    this.count += num || 1
  }
}

export default Store
