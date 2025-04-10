import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loginForm!:FormGroup
  constructor(  private fb:FormBuilder
  ){
    this.loginForm=fb.group({
      email:['',[Validators.required , Validators.email]],
      password:['',Validators.required]
    })

  }
  title = 'tailwinds';


  send(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)

    }
  }
}
