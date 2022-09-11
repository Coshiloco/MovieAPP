import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class CreateContentValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    title: schema.string.nullableAndOptional({ escape: true }, [
      rules.alpha({
        allow: ['space'],
      }),
      rules.maxLength(50),
    ]),
    description: schema.string.nullableAndOptional({ escape: true }, [
      rules.alpha({
        allow: ['space'],
      }),
    ]),
    year: schema.number.nullableAndOptional([rules.range(3000, 1894)]),
    category: schema.string({ escape: true }, [
      rules.alpha({
        allow: ['space'],
      }),
      rules.maxLength(8),
    ]),
    rating: schema.number.nullableAndOptional(),
    is_recent: schema.boolean.nullableAndOptional(),
    is_trending: schema.boolean.nullableAndOptional(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
