import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomforDirective } from '../directives/customfor.directive';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../models/todo-item.model'; // Modeli import et

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CustomforDirective, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  work: string = ""; // Metin girdisi
  date: string = ""; // Tarih girdisi
  updateWork: string = ""; 
  updateDate: string = ""; 
  updateIndex: number = 0;
  isUpdateWorkFormActive: boolean = false;
  todos: TodoItem[] = []; // TodoItem modeli kullanılıyor

  constructor(private cdr: ChangeDetectorRef) {}

  save() {
    if (this.work.trim() !== "" && this.date.trim() !== "") {
      const newTodo: TodoItem = { text: this.work.trim(), date: this.date.trim() }; // Yeni todo oluştur
      this.todos = [...this.todos, newTodo]; // Diziye ekle
      console.log(this.todos); // Güncellenen diziyi kontrol et
      this.work = ""; // Metin input'u temizle
      this.date = ""; // Tarih input'u temizle
      this.cdr.detectChanges();
    }
  }

  delete(index: number) {
    this.todos.splice(index, 1); // İlgili öğeyi kaldır
  }

  get(index: number) {
    const todo = this.todos[index];
    this.updateIndex = index;
    this.updateWork = todo.text;
    this.updateDate = todo.date;
    this.isUpdateWorkFormActive = true;
  }

  update() {
    const updatedTodo: TodoItem = { text: this.updateWork, date: this.updateDate };
    this.todos[this.updateIndex] = updatedTodo;
    this.isUpdateWorkFormActive = false;
  }
}
