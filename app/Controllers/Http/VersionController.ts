import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LumiDatabaseService from '@ioc:LumiDB/DatabaseService'


export default class VersionController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({params}: HttpContextContract) {
    let key = params.id
    return {
      version: LumiDatabaseService.getVersion(key)
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, request}: HttpContextContract) {
    let key = params.key
    let version = request.all().version
    let values = request.all().values
    LumiDatabaseService.setKeyVersion(key,values,version);
    return {
      [key]:LumiDatabaseService.getValuesByKey(key)
    }
  }

  public async destroy({params, request}: HttpContextContract) {
    let key = params.key
    let version = request.all().version
    LumiDatabaseService.deleteKey(key)
    LumiDatabaseService.setVersion(key, version)
    return{
      entries: LumiDatabaseService.get()
    }
  }
}
