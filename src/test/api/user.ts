
import { fakeLogin } from '../../api/user'

describe('# user', () => {
  it('fake login', async () => {
    const data = await fakeLogin('hi', '~')
    expect(data).toEqual({
      username: 'hi',
      password: '~'
    })
  })
})
