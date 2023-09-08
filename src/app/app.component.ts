import { Component } from '@angular/core';

interface Form {
  username: string;
  age: number;
  gender: string;
  index?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'angular-todolist';
  public message: string = 'Hello World';
  public Data: Array<Form> = [];
  public isButtonVisible = false;

  public user: Form = {
    username: '',
    age: 0,
    gender: '',
  };

  public edituser: Form = {
    username: '',
    age: 0,
    gender: '',
    index: 0,
  };

  public onSubmit = (value: any) => {
    if (this.isButtonVisible) {
      return this.updateuser(value);
    } else {
      return this.adduser(value);
    }
  };

  private updateuser = (value: any) => {
    const { index, username, age, gender }: Form | any = this.edituser || {};

    this.Data[index].username = username;
    this.Data[index].age = age;
    this.Data[index].gender = gender;
    this.isButtonVisible = false;
    return (this.edituser = { username: '', age: 0, gender: '' });
  };

  private adduser = (value: any) => {
    this.Data.push(this.user);
    this.user = { username: '', age: 0, gender: '' };
  };

  public onEdit = (data: any, index: number) => {
    this.edituser = {
      ...data,
      index: index,
    };
    this.isButtonVisible = true;
  };

  public onRemove = (userindex: number) => {
    this.Data.forEach((value, index) => {
      if (index === userindex) this.Data.splice(index, 1);
    });
  };
}
