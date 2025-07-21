import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class RegisterComponent {
  username = '';
  password = '';

  private router = inject(Router);

  register() {
    localStorage.setItem('user', this.username);
    localStorage.setItem('pass', this.password);
    this.router.navigateByUrl('/');
  }
}
