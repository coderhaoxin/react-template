import Fetch from 'fetch.io'

const request = new Fetch({
  prefix: 'https://httpbin.org'
})

export { request }
