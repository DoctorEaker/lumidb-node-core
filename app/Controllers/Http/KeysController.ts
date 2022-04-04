import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LumiDatabaseService from '@ioc:LumiDB/DatabaseService'

export default class KeysController {
    public async index({ }: HttpContextContract) {
    }

    public async create({ }: HttpContextContract) { }

    public async store({ params }: HttpContextContract) {
        let key = params.id
        LumiDatabaseService.insert(key, "")
        return {
          [key]: LumiDatabaseService.getValuesByKey(key)
        }
    }

    public async show({ params }: HttpContextContract) {
        let key = params.id
        return {
          [key]: LumiDatabaseService.getValuesByKey(key)
        }
    }

    public async edit({ }: HttpContextContract) { }

  public async update({params, request}: HttpContextContract) {
    let oldKey = params.id
    let newKey = request.all().newKey
    LumiDatabaseService.renameKey(oldKey,newKey)
    return {
      [newKey]: LumiDatabaseService.getValuesByKey(newKey)
    }
  }

  public async destroy({params }: HttpContextContract) {
    let key = params.id
    LumiDatabaseService.deleteKey(key)
    return {
      entries: LumiDatabaseService.get()
    }
  }


}
