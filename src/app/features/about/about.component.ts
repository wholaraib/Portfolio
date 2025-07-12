import { Component, AfterViewInit } from '@angular/core';
import { AccordionComponent } from "../../shared/components/accordion/accordion.component";
declare const GitHubCalendar: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    GitHubCalendar(".calendar", "wholaraib");
  }
}
