import { Time } from "@angular/common";

export class Cita{
  constructor(
      public _id:string,
      public idpaciente : string,
      public iduser : string,
      public iddoctor:string,
      public idespecialidad:string,
      public fecha: string,
      public hora : string,
      public detalle:string,

  ){

  }
}
