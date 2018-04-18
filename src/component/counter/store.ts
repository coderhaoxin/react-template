
import { observable, action } from 'mobx'

class Store {
  @observable public count: number

  @action
  add = (num?: number): void => {
    this.count += num || 1
  }
}

export default Store
