import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Content from 'App/Models/Content'
import CreateContent from 'App/Validators/CreateContentValidator'

export default class ContentsController {
  public async index({ response }: HttpContextContract) {
    const projects = await Content.query()
    return response.ok(projects)
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(CreateContent)
      const content = await Content.create(data)
      response.ok(content)
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  public async show({ response, params }: HttpContextContract) {
    const idmanual = params.id
    console.log('idmanual ', idmanual)
    const data = await Content.query().where('id', idmanual).preload('images')
    return response.ok(data)
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const idcontent = params.id
      const data = await request.validate(CreateContent)
      const updatedcontent = await Content.query().where('id', idcontent).update(data)
      response.ok(updatedcontent)
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  public async destroy({}: HttpContextContract) {}

  public async withdescription({ response }: HttpContextContract) {
    const withDescription = await Content.query().whereNotNull('description')
    console.log(withDescription)
    return response.ok(withDescription)
  }
}
