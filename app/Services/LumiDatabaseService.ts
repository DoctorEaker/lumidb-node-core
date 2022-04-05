import LumiDatabaseInterface from 'Contracts/interfaces/LumiDatabase.interface'

export default class LumiDatabaseService implements LumiDatabaseInterface{
  private entries: Record<string,[string]>
  private version: Record<string,number>

  constructor(){
    this.entries = {}
    this.version = {}
  }

  public get(): Record<string,[string]>{
    return this.entries
  }

  public getKeys(): [string]{
    return Object.keys(this.entries) as [string]
  }

  public getValue(key:string, index:number):string{
    return this.getValuesByKey(key)[index]
  }

  public getValuesByKey(key:string):[string]{
    return this.get()[key]
  }

  private increaseVersion(key:string){
    if(key in this.version){
      this.version[key]++
      return
    }

    this.version[key] = 1
  }

  public getVersion(key:string):number{
    return this.version[key]
  }

  public setVersion(key:string, version:number){
    this.version[key] = version
  }

  public insert(key:string , value:string){

    if(key in this.entries){
      this.entries[key].push(value)
      this.increaseVersion(key)
      return
    }

    this.entries[key] = [value]
    this.increaseVersion(key)
  }

  public renameKey(oldKey:string, newKey:string){
    this.entries[newKey] = this.entries[oldKey]
    delete this.entries[oldKey]
    this.version[newKey] = this.version[oldKey]
    delete this.version[oldKey]
    this.increaseVersion(newKey)
  }

  public updateValue(key:string, index:number, value:string){
    this.entries[key][index]=value
    this.increaseVersion(key)
  }

  public deleteKey(key:string){
    delete this.entries[key]
    this.increaseVersion[key]
  }

  public deleteValue(key:string, index:number){
    this.entries[key].splice(index,1)
    this.increaseVersion(key)
  }

  public setKeyVersion(key:string, values: [string], version:number){
    this.entries[key]=values
    this.setVersion(key, version)
  }
}
