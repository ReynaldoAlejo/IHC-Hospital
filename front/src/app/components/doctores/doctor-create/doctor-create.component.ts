import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  public doctor;
  public file : any;
  //public imgSelect: String | ArrayBuffer;
  public imgSelect:any;
  public especialidades: any;
  public success_message: any;
  public error_message: any;

  constructor(
    private _doctorService : DoctorService,
  ) {
    this.doctor = new Doctor('','','','',1,'');
  }

  ngOnInit() {

    this._doctorService.get_especialidades().subscribe(
      response=>{
        this.especialidades = response.especialidad;
        console.log(this.especialidades);

      },
      error=>{

      }
    );
  }


  success_alert(){
   this.success_message = '';
  }

  error_alert(){
    this.error_message = '';
   }

  onSubmit(productoForm:NgForm){
    if(productoForm.valid){
     this._doctorService.insert_doctor({
       nombre: productoForm.value.nombre,
       apellido: productoForm.value.apellido,
       imagen: this.file,
       exp: productoForm.value.exp,
       idespecialidad: productoForm.value.idespecialidad,


     }).subscribe(
       response =>{
        this.success_message = 'Se registro el producto correctamente';
        this.doctor = new Doctor('','','','',1,'');
        this.imgSelect = '../../../../assets/img/default.jpg';
       },
       error=>{

       }
     );

    }else{
      this.error_message = 'Complete correctamente el formulario';

    }
  }

  imgSelected(event: any){
    if(event.target.files  && event.target.files[0]){
        this.file = <File>event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imgSelect= reader.result;
        reader.readAsDataURL(this.file);
    }
  }


}
