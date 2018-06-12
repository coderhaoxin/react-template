import { request } from './base'

export async function fakeLogin (username: string, password: string) {
  const body = await request
    .post('/post')
    .send({
      username,
      password
    })
    .json()

  return body.json
}
