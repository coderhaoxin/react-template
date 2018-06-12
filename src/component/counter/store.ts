import { observable, action } from 'mobx'

class Store {
  @observable public count: number

  constructor () {
    this.count = 0
  }

  @action
  add = (num?: number): void => {
    this.count += num || 1
  }
}

export default Store
