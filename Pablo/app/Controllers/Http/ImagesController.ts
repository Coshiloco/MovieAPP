import { ResponsiveAttachment } from '@ioc:Adonis/Addons/ResponsiveAttachment'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Image from 'App/Models/Image'

export default class ImagesController {
  public async index({ response }: HttpContextContract) {
    const images = await Image.query()
    return response.ok(images)
  }

  public async store({ request, response }: HttpContextContract) {
    const imageobjeto = new Image()
    const image = request.file('image_xl_md')
    const imagedos = request.file('image_lg_sm')
    imageobjeto.image_xl_md = image ? await ResponsiveAttachment.fromFile(image) : null
    imageobjeto.image_lg_sm = imagedos ? await ResponsiveAttachment.fromFile(imagedos) : null
    imageobjeto.contentimageid = request.input('contentimageid')
    const movies = await Image.create(imageobjeto)

    return response.ok(movies)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
