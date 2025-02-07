
import { Component, inject } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthenSerService } from '../../../core/services/authService/authen-ser.service';
import { log, error } from 'console';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

private authenSerService = inject(AuthenSerService)

private router = inject(Router)

  isLoading:boolean = false;

  errorMessage:string =''


  registerForm:FormGroup = new FormGroup({
    name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email : new FormControl(null ,[Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,10}$/)]),
    rePassword : new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,10}$/)]) ,
    phone : new FormControl(null ,[Validators.required , Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
  } , this.confirmPass)


  confirmPass(form:AbstractControl):any
  {
    
    if (form.get('password')?.value === form.get('rePassword')?.value) {
      
      return null
    }else{
      return {'missmached' : true}
      }


  }
  registerSubmit(){
   if(this.registerForm.valid){
    this.isLoading = true;
  this.authenSerService.sendRegAPI(this.registerForm.value).subscribe({
    next : (res)=>{
       this.isLoading = false 

       if(res.message == 'success'){

        this.router.navigate(['/login'])

       }


      } ,
    error : (err)=>{

    this.errorMessage = err.error.message

     
      this.isLoading = false




        
       },
  })
   
    
   }
  }



}
