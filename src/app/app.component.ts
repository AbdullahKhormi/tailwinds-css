import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  loginForm!: FormGroup;
  isDarkMode = false;

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Check for saved theme preference on component initialization
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      this.isDarkMode = true;
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }

  title = 'tailwinds';

  send() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // You can add your login logic here
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }
}