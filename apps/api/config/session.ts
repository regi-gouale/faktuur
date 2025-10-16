/**
 * Config source: https://git.io/JKAtN
 *
 * You are allowed to modify this file as per your needs.
 */

import { sessionConfig } from '@adonisjs/session/build/config'
import Env from '@ioc:Adonis/Core/Env'

export default sessionConfig({
  driver: Env.get('SESSION_DRIVER', 'cookie'),
  cookieName: 'faktuur_session',
  clearWithBrowser: false,
  age: '2h',
  cookie: {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: Env.get('NODE_ENV') === 'production',
  },
  enabled: true,
})
