import { JsonPipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { capitalLetterValidator } from './validators/func';
import { capitalParamLetterValidator } from './validators/param-func';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,FormsModule,JsonPipe],
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()" >
    <input type="text" formControlName="name" placeholder="name" ><br><br>
    @if(!name.valid && (name.dirty || name.touched)){<div >
    {{name.errors | json}}</div>}
    <input type="text" formControlName="surname" placeholder="surname"><br><br>
    @if(!surname.valid && (surname.dirty || surname.touched)){<div >
    {{surname.errors| json }}</div>}
    <input type="email" formControlName="email" placeholder="email"><br><br>
    @if(!email.valid && (email.dirty || email.touched)){<div >
    {{ email.errors | json }}</div>}
     
    <button style="padding-left: 7%;">Send</button>
  </form>
  `,

})

export class AppComponent {
  frm: FormGroup;
  data : string = "naber";
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(20),capitalLetterValidator]],
      surname: ["",[Validators.required, Validators.minLength(3),Validators.maxLength(20),capitalParamLetterValidator(3)]],
      email: ["",[Validators.required, Validators.email]]
    });

  }
 
  onSubmit() {

    if (this.frm.valid == true) {
      console.log("giriş yapıldı")
    }
    console.log(this.frm.valid)
  }
  get name (){
    return this.frm.get("name")
  }
 
  get surname (){
    return this.frm.get("surname")
  }
  
  get email (){
    return this.frm.get("email")
  }
}
