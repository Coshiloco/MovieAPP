import { ResponsiveAttachment } from '@ioc:Adonis/Addons/ResponsiveAttachment'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Content from 'App/Models/Content'

export default class ContentsController {
  public async index({ response }: HttpContextContract) {
    const projects = await Content.query()
    return response.ok(projects)
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = request.body()

    const image = request.file('image')
    data.image = image ? await ResponsiveAttachment.fromFile(image) : null

    const movies = await Content.create(data)

    return response.ok(movies)
  }

  public async show({ response, params }: HttpContextContract) {
    const idmanual = params.id
    console.log('idmanual ', idmanual)
    const data = await Content.findByOrFail('id', idmanual)
    return response.ok(data)
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async withdescription({ response }: HttpContextContract) {
    const withDescription = await Content.query().whereNotNull('description')
    console.log(withDescription)
    return response.ok(withDescription)
  }
}
