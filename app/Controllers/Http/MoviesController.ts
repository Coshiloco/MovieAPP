import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async index({ response }: HttpContextContract) {
    const projects = await Movie.query()
    return response.ok(projects)
  }
  public async store({ request, response }: HttpContextContract) {
    const data = request.body()

    const movies = await Movie.create(data)

    return response.ok(movies)
  }
}
