import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula01';
  msg = '';
  boasvindas = '';

  exibirMsg() {
    this.boasvindas = 'Oi ' + this.msg + 'aaaa';
  }
}

