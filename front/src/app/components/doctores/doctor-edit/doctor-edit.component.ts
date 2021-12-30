import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { GLOBAL } from 'src/app/services/GLOBAL';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  public doctor:any;
  public id: any;
  public especialidades: any;
  public url;
  public file :any;
  public imgSelect : any;
  public success_message: any;
  public error_message: any;
  public stock: any;

  constructor(
    private _route : ActivatedRoute,
    private _doctorService : DoctorService
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {

    this._route.params.subscribe(params=>{
      this.id = params['id'];
      this._doctorService.get_doctor(this.id).subscribe(
        response=>{
          this.doctor = response.doctor;

          this._doctorService.get_especialidades().subscribe(
            response=>{
              this.especialidades = response.especialidad;
              console.log(this.especialidades);

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

  onSubmit(productoForm: { valid: any; value: { nombre: any; apellido: any; exp: any; idespecialidad: any;  }; }){
    if(productoForm.valid){

      this._doctorService.update_doctor({
        _id: this.id,
        nombre: productoForm.value.nombre,
        apellido: productoForm.value.apellido,
        imagen: this.file,
        idespecialidad: productoForm.value.idespecialidad,
        exp: productoForm.value.exp,
        img_name : this.doctor.imagen,
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
