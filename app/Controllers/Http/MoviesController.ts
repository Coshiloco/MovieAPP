import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async index({ request, response }: HttpContextContract) {
    const projects = await Movie.query()
    return response.json({ projects })
  }
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'title',
      'description',
      'year',
      'category',
      'rating',
      'image',
      'isrecent',
      'istrending',
    ])

    const project = await Movie.create(data)

    return response.json({ project })
  }
}
