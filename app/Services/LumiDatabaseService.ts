import LumiDatabaseInterface from 'Contracts/interfaces/LumiDatabase.interface'

export default class LumiDatabaseService implements LumiDatabaseInterface{
  private entries: Record<string,[string]>
  private version: number

  constructor(){
    this.entries = {}
    this.version = 0
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

  private increaseVersion(){
    this.version++
  }

  public getVersion():number{
    return this.version
  }

  public setVersion(version:number){
    this.version = version
  }

  public insert(key:string , value:string){

    if(key in this.entries){
      this.entries[key].push(value)
      return
    }

    this.entries[key] = [value]
    this.increaseVersion()
  }

  public renameKey(oldKey:string, newKey:string){
    this.entries[newKey] = this.entries[oldKey]
    delete this.entries[oldKey]
    this.increaseVersion()
  }

  public updateValue(key:string, index:number, value:string){
    this.entries[key][index]=value
    this.increaseVersion()
  }

  public deleteKey(key:string){
    delete this.entries[key]
    this.increaseVersion()
  }

  public deleteValue(key:string, index:number){
    this.entries[key].splice(index,1)
    this.increaseVersion()
  }
}
