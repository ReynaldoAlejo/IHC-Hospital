import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-citas-edit',
  templateUrl: './citas-edit.component.html',
  styleUrls: ['./citas-edit.component.css']
})
export class CitasEditComponent implements OnInit {

  public cita:any;
  public id: any;
  public especialidades: any;
  public doctores: any;
  public pacientes: any;
  public url;
  public file :any;
  public imgSelect : any;
  public success_message: any;
  public error_message: any;
  public stock: any;
  public identity:any;

  constructor(
    private _route : ActivatedRoute,
    private _citaService : CitaService,
    private _userService:UserService,
  ) {
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {

    this._route.params.subscribe(params=>{
      this.id = params['id'];
      this._citaService.get_cita(this.id).subscribe(
        response=>{
          this.cita = response.cita;

          this._citaService.get_especialidades().subscribe(
            response=>{
              this.especialidades = response.especialidad;
              console.log(this.especialidades);

            },
            error=>{

            }
          );

          this._citaService.get_doctores().subscribe(
            response=>{
              this.doctores = response.doctores;
              console.log(this.doctores);

            },
            error=>{

            }
          );
          this._citaService.get_pacientes().subscribe(
            response=>{
              this.pacientes = response.pacientes;
              console.log(this.pacientes);

            },
            error=>{

            }
          );


        },
        error=>{

        }
      )
    });

  }

  success_alert(){
    this.success_message = '';
   }

   error_alert(){
     this.error_message = '';
    }

  imgSelected(event: any){
    if(event.target.files  && event.target.files[0]){
        this.file = <File>event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imgSelect= reader.result;
        reader.readAsDataURL(this.file);
    }
  }

  onSubmit(citaForm: { valid: any; value: { idpaciente: any;iddoctor: any; idespecialidad: any;fecha: any;  hora: any}; }){
    if(citaForm.valid){

      this._citaService.update_cita({
        _id: this.id,
        iduser:this.identity._id,
        idpaciente: citaForm.value.idpaciente,
        iddoctor: citaForm.value.iddoctor,
        idespecialidad: citaForm.value.idespecialidad,
        fecha: citaForm.value.fecha,
        hora: citaForm.value.hora,
      }).subscribe(
        response=>{
          console.log(response);
          this.success_message = 'Se actualizó el registro correctamente';
        },
        error=>{

        }
      );

    }else{
      this.error_message = 'Complete correctamente el formulario';
    }
  }

}
