import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class LoginComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
