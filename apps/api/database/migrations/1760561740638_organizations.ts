import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrganizationsSchema extends BaseSchema {
  protected tableName = 'organizations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('account_id')
        .unsigned()
        .references('id')
        .inTable('accounts')
        .onDelete('CASCADE')
      table.string('name', 255).notNullable()
      table.string('slug', 255).notNullable()
      table.string('billing_email', 255).nullable()
      table.boolean('is_default').notNullable().defaultTo(false)
      table.json('metadata').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.unique(['account_id', 'slug'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
