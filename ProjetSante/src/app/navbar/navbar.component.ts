import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    'Maladies',
    'Santé naturelle',
    'Nutrition',
    'Famille',
    'Santé mentale',
    'Automne',
    'Actualités'
  ];
}