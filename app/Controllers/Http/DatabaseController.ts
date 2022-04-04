import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LumiDatabaseService from '@ioc:LumiDB/DatabaseService'

export default class DatabaseController {

  public async index({}: HttpContextContract) {
    return { entries: LumiDatabaseService.get() }
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {
    return {
      keys: LumiDatabaseService.getKeys()
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
