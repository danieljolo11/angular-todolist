import { Component } from '@angular/core';

interface Form {
  username: string;
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
  };

  public edituser: Form = {
    username: '',
    index: 0,
  };

  public adduser = (value: any) => {
    this.Data.push(this.user);
    this.user = { username: '' };
  };

  public updateuser = (value: any) => {
    const { index, username }: Form | any = this.edituser || {};

    this.Data[index].username = username;
    this.isButtonVisible = false;
    return (this.edituser = { username: '' });
  };

  public onEdit = (data: string, index: number) => {
    this.edituser = { username: data, index: index };
    this.isButtonVisible = true;
  };

  public onRemove = (userindex: number) => {
    this.Data.forEach((value, index) => {
      if (index === userindex) this.Data.splice(index, 1);
    });
  };
}
