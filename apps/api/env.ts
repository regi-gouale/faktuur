/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  SESSION_DRIVER: Env.schema.enum(['cookie', 'memory'] as const),
  DB_CONNECTION: Env.schema.enum(['sqlite', 'mysql', 'pg', 'mssql', 'oracle'] as const),
  MYSQL_HOST: Env.schema.string.optional({ format: 'host' }),
  MYSQL_PORT: Env.schema.number.optional(),
  MYSQL_USER: Env.schema.string.optional(),
  MYSQL_PASSWORD: Env.schema.string.optional(),
  MYSQL_DB_NAME: Env.schema.string.optional(),
  PG_HOST: Env.schema.string.optional({ format: 'host' }),
  PG_PORT: Env.schema.number.optional(),
  PG_USER: Env.schema.string.optional(),
  PG_PASSWORD: Env.schema.string.optional(),
  PG_DB_NAME: Env.schema.string.optional(),
  MSSQL_SERVER: Env.schema.string.optional({ format: 'host' }),
  MSSQL_PORT: Env.schema.number.optional(),
  MSSQL_USER: Env.schema.string.optional(),
  MSSQL_PASSWORD: Env.schema.string.optional(),
  MSSQL_DB_NAME: Env.schema.string.optional(),
  ORACLE_HOST: Env.schema.string.optional({ format: 'host' }),
  ORACLE_PORT: Env.schema.number.optional(),
  ORACLE_USER: Env.schema.string.optional(),
  ORACLE_PASSWORD: Env.schema.string.optional(),
  ORACLE_DB_NAME: Env.schema.string.optional(),
})
