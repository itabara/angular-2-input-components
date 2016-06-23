import {Component} from 'angular2/core';
import {InputComponent} from './binding/input.component';
import {ConfirmComponent} from './binding/confirm.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
          <my-input (submitted)="onSubmit($event)" [myself]="confirmMyself"></my-input>
        </div>
        <div class="container">
          <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {
  myself = {name: '', age: ''};
  confirmMyself = {name: '', age: ''};

  onSubmit(myself: {name:string, age:string}){
    //this.myself = myself;
    this.myself={name: myself.name, age: myself.age};
  }

  onConfirm(myself: {name:string, age:string}){
    //this.confirmMyself = myself;
    this.confirmMyself={name: myself.name, age: myself.age};
  }
}
