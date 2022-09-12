import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserAuthValidator from 'App/Validators/CreateUserAuthValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ auth, request, response }: HttpContextContract) {
    const data = await request.validate(CreateUserAuthValidator)
    console.log(data)
    // create a user record with the validated data
    const user = await User.create(data)

    // login the user using the user model record
    await auth.login(user)

    // redirect to the login page
    return response.ok(user)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async login({}: HttpContextContract) {}
}
