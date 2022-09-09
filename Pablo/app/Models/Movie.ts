import {
  responsiveAttachment,
  ResponsiveAttachmentContract,
} from '@ioc:Adonis/Addons/ResponsiveAttachment'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public year: number

  @column()
  public category: string

  @column()
  public rating: number

  @responsiveAttachment()
  public image: ResponsiveAttachmentContract | null

  @column()
  public isRecent: boolean

  @column()
  public isTrending: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
