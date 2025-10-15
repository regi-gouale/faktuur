import Hash from '@ioc:Adonis/Core/Hash'
import {
  BaseModel,
  beforeSave,
  belongsTo,
  BelongsTo,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Account from './Account'
import Organization from './Organization'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public accountId: number

  @belongsTo(() => Account)
  public account: BelongsTo<typeof Account>

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public fullName: string

  @column()
  public role: 'owner' | 'admin' | 'member'

  @column()
  public status: 'invited' | 'active' | 'suspended'

  @column()
  public defaultOrganizationId?: number | null

  @manyToMany(() => Organization, {
    pivotTable: 'organization_users',
    pivotColumns: ['role'],
  })
  public organizations: ManyToMany<typeof Organization>

  @column.dateTime({ serializeAs: 'last_login_at' })
  public lastLoginAt?: DateTime | null

  @column({ serializeAs: null })
  public rememberMeToken?: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
