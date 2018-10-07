// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular01';
// }


import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular01';
  username='';
  todolist=[];
  donelist=[];
  addTodo(e){
    var obj={
      username:this.username,
    }
    if(e.keyCode == 13){
      this.todolist.push(obj);
      this.username='';
    }
  }
  deleteTodo(index,done){
    if(done){
      this.todolist.splice(index,1);
    }else{
      this.donelist.splice(index,1);
    }
  }
  changeTodo(index,done){
    if(done){
      var Todo=this.todolist[index];
      this.donelist.push(Todo);
      this.todolist.splice(index,1);
    }else{
      var Done=this.donelist[index];
      this.todolist.push(Done);
      this.donelist.splice(index,1);
    }
  }
}
