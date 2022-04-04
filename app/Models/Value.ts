export default class Value {
  private value: string
  private version: number = 0;

  constructor(value: string){
    this.value = value;
    this.version++
  }

  public get(){
    return {
      value: this.value,
      version: this.version
    }
  }

  public getValue(){
    return this.value
  }

  public getVersion(){
    return this.version
  }

  private increaseVersion(){
    this.version++
  }

  public setValue(value:string){
    this.value = value
    this.increaseVersion()
  }

  public setVersion(version:number){
    this.version = version
  }

}
