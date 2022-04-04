
export default interface LumiDatabaseInterface{
  get():Record<string,[string]>
  getKeys():[string]
  getValue(key:string, index:number):string
  getValuesByKey(key:string):[string]
  insert(key:string, value:string):void
  renameKey(oldKey:string, newKey:string):void
  updateValue(key:string, index:number, value:string):void
  deleteKey(key:string):void
  deleteValue(key:string,index:number):void
  getVersion(key:string):number
  setVersion(key:string, version:number):void
  setKeyVersion(key:string, values:[string], version:number):void
}
