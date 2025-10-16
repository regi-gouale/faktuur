import Session from '@ioc:Adonis/Addons/Session'
import Database from '@ioc:Adonis/Lucid/Database'
import { test } from '@japa/runner'
import Account from 'App/Models/Account'
import User from 'App/Models/User'

test.group('Auth session', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
  })

  group.each.teardown(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('returns 401 when user is not authenticated', async ({ client }) => {
    const response = await client.get('/auth/session')

    response.assertStatus(401)
  })

  test('returns the serialized user when authenticated', async ({ client, assert }) => {
    const account = await Account.create({
      name: 'Faktuur Test Account',
      slug: 'faktuur-test-account',
    })

    const user = await User.create({
      accountId: account.id,
      email: 'owner@example.test',
      password: 'password1234',
      fullName: 'Test Owner',
      role: 'owner',
      status: 'active',
    })

    const sessionClient = Session.client()
    const sessionKey = 'auth_web'

    sessionClient.set(sessionKey, user.id)

    const { cookieName, signedSessionId } = await sessionClient.commit()

    const response = await client.get('/auth/session').cookie(cookieName, signedSessionId)

    response.assertStatus(200)
    response.assertBodyContains({
      user: {
        id: user.id,
        email: user.email,
      },
    })

    const body = response.body()
    assert.exists(body.user.fullName)

    await sessionClient.forget()
  })
})
