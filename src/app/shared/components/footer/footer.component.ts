import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear!: string;
  OnInit() {  
    this.currentYear = new Date().getFullYear().toString();
  }

}
