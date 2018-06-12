import { fakeLogin } from '../../../api/user'

import faker from 'faker'

describe('# user', () => {
  it('fake login', async () => {
    const username = faker.internet.email()
    const password = faker.phone.phoneNumber()

    const data = await fakeLogin(username, password)
    expect(data).toEqual({
      username,
      password
    })
  })
})
