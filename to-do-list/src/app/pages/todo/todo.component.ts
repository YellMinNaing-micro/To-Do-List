import { Component } from '@angular/core';
import {
  IonicModule,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonCheckbox,
  IonLabel,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonContent,
} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class TodoComponent {
  newTask = '';
  tasks: { title: string; completed: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
