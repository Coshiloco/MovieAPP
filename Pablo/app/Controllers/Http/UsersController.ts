import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserAuthValidator from 'App/Validators/CreateUserAuthValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({ auth, request, response }: HttpContextContract) {
    await request.validate(CreateUserAuthValidator)
    await auth.use('api').authenticate()
    return response.ok(auth.user)
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
