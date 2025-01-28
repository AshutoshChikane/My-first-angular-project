import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';



interface Todo {
  name: string;
  desc: string;
}



@Component({
  selector: 'app-todo-list',
  standalone: false,
  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todo_list: Todo[] =[{
    name: 'first task',
    desc: 'first task description'
  } ,
  {
    name: 'second task',
    desc: 'second task description'
  }];
  task = {
    title: '',
    description: ''
  };
  ngOnInit() {
    console.log(this.todo_list);  // Check if the data is being logged correctly
  }

  onSubmit(form: any) {
    console.log('Form Submitted!', form);
    const title: string = form.title
    const description: string = form.description

    const append_data: { name: string, desc: string } = {"name": title, "desc": description}

    this.todo_list.push(append_data)

  }
  deleteUser(i: any){
    this.todo_list.splice(i, 1);
  }
}
