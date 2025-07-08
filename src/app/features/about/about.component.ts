import { Component, AfterViewInit } from '@angular/core';
declare const GitHubCalendar: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    GitHubCalendar(".calendar", "wholaraib");
  }
}
