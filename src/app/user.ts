export class User {
    //properties
    constructor(
       public image: any,
       public username: any,
       public bio: string,
       public followers: number,
       public following: number,
       public location: string,
       public twitter: string
    ){

    }
}