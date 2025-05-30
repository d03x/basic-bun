import "reflect-metadata";
class Person {
  public ger;
  constructor() {
    this.ger = "Geri"
  }
}
class User {
  name: string

  constructor() {
    this.name = "Firmawan"
  }
  /**
   * setUser
   */
  public setUser(name: string) {
    this.name = name;
  }
}


function Injectable<T extends { new(...args: any[]): {} }>(target: T) {
  const params = Reflect.getOwnMetadata("design:paramtypes", target) || [];
  return class extends target {
    constructor(...args: any[]) {
      if (args.length === 0) {
        super(...params.map((dep: any) => new dep()))
      } else {
        super(...args);
      }
    }
  }

}

@Injectable class ExampleService {
  constructor(
    public user?: User,
    public person?: Person) { }
  /**
   * getUser
   */
  public getUser() {
    console.log(this.user?.name);

  }

}
const user = new ExampleService();
console.log(user.person?.ger);
user.getUser()
// Saat class ExampleService didekorasi dengan @Injectable, maka metadata parameter konstruktor (User) akan dicetak.
