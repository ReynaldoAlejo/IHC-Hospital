import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/models/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-citas-create',
  templateUrl: './citas-create.component.html',
  styleUrls: ['./citas-create.component.css']
})
export class CitasCreateComponent implements OnInit {

  public cita;
  public file : any;
  public identity:any;
  public especialidades: any;
  public pacientes:any
  public doctores:any
  public success_message: any;
  public error_message: any;

  constructor(
    private _citaService : CitaService,
    private _userService:UserService,
    private _router:Router,
  ) {
    this.cita = new Cita('','','','','','','','');
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
   if(this.identity){
    this._citaService.get_especialidades().subscribe(
      response=>{
        this.especialidades = response.especialidad;
        console.log(this.especialidades);

      },
      error=>{

      }
    );

    this._citaService.get_pacientes().subscribe(
      response=>{
        this.pacientes = response.pacientes;
      },
      error=>{

      }
    );



    this._citaService.get_doctores().subscribe(
      response =>{

        this.doctores = response.doctores;
      },
      error=>{

      }
    );

    this._citaService.get_especialidades().subscribe(
      response =>{

        this.especialidades = response.especialidad;
      },
      error=>{

      }
    );
  }else{
    this._router.navigate(['']);
  }
}


  success_alert(){
   this.success_message = '';
  }

  error_alert(){
    this.error_message = '';
   }

  onSubmit(productoForm:NgForm){
    if(productoForm.valid){
     this._citaService.insert_cita({
      idpaciente: productoForm.value.idpaciente,
      iduser: this.identity._id,
      iddoctor: productoForm.value.iddoctor,
      idespecialidad: productoForm.value.idespecialidad,
      fecha:productoForm.value.fecha,
      hora:productoForm.value.hora,
      detalle:productoForm.value.detalle,


     }).subscribe(
       response =>{
        this.success_message = 'Se registro el producto correctamente';
        this.cita = new Cita('','','','','','','','');

       },
       error=>{

       }
     );

    }else{
      this.error_message = 'Complete correctamente el formulario';

    }
  }



}
