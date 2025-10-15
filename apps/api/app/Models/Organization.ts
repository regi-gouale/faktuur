import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Account from './Account'
import User from './User'

export default class Organization extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public accountId: number

  @belongsTo(() => Account)
  public account: BelongsTo<typeof Account>

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public billingEmail?: string | null

  @column()
  public metadata?: Record<string, unknown> | null

  @column({ serializeAs: 'is_default' })
  public isDefault: boolean

  @manyToMany(() => User, {
    pivotTable: 'organization_users',
    pivotColumns: ['role'],
  })
  public members: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
