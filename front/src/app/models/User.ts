export class User {
    
    constructor(
        public _id:string,
        public nombres:string,
        public apellidos:string,
        public email : string,
        public password: string,
        public dni : string,
        public telefono: string,
        public role : string,
        ) {
    }
}