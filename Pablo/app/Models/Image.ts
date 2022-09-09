import {
  responsiveAttachment,
  ResponsiveAttachmentContract,
} from '@ioc:Adonis/Addons/ResponsiveAttachment'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contentimageid: number

  @responsiveAttachment()
  public imagexlmd: ResponsiveAttachmentContract | null

  @responsiveAttachment()
  public imagelgsm: ResponsiveAttachmentContract | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
