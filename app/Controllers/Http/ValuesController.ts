import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LumiDatabaseService from '@ioc:LumiDB/DatabaseService'


export default class ValuesController {

    public async index({ params }: HttpContextContract) {
        let key = params.key_id
        return {
            [key]: Object.assign({}, LumiDatabaseService.getValuesByKey(key))
        }
    }

    public async store({ params, request }: HttpContextContract) {
        let key = params.key_id
        let value = request.all().value
        LumiDatabaseService.insert(key, value)
        return {
            [key]: Object.assign({}, LumiDatabaseService.getValuesByKey(key))
        }
    }

    public async show({ params }: HttpContextContract) {
        let key = params.key_id
        let index = params.id
        return {
            [key]: {
                [index]: LumiDatabaseService.getValue(key, index)
            }
        }
    }

    public async edit({ }: HttpContextContract) { }

    public async update({ params, request }: HttpContextContract) {
        let key = params.key_id
        let index = params.id
        let value = request.all().value
        LumiDatabaseService.updateValue(key, index, value)
        return {
            [key]: {
                [index]: LumiDatabaseService.getValuesByKey(key)[index]
            }
        }
    }

    public async destroy({ params }: HttpContextContract) {
        let key = params.key_id
        let index = params.id
        LumiDatabaseService.deleteValue(key, index)
        return {
            [key]: Object.assign({}, LumiDatabaseService.getValuesByKey(key))
        }
    }
}
