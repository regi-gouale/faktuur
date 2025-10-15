import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('account_id')
        .unsigned()
        .references('id')
        .inTable('accounts')
        .onDelete('CASCADE')
      table.string('email', 255).notNullable()
      table.string('full_name', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('role', 50).notNullable().defaultTo('member')
      table.string('status', 50).notNullable().defaultTo('invited')
      table.integer('default_organization_id').unsigned().nullable()
      table.timestamp('last_login_at', { useTz: true }).nullable()
      table.string('remember_me_token', 255).nullable()
      table.unique(['email'])

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
