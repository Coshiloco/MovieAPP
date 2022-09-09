import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async index({ response }: HttpContextContract) {
    const projects = await Movie.query()
    return response.ok(projects)
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = request.body()

    const movies = await Movie.create(data)

    return response.ok(movies)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async withdescription({ response }: HttpContextContract) {
    const withDescription = await Movie.query().whereNotNull('description')
    console.log(withDescription)
    return response.ok(withDescription)
  }
}
