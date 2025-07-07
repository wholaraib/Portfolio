import { Component, OnInit, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {

  dynamicText: string = "";
  phrases: string[] =[
    "Team Player.",
    "Software Developer.",
    "Frontend Developer.",
    "Software Engineer.",
    "Fullstack Developer.",
    "Code Enthusiast.",
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 100;
  delayBetweenPhrases: number = 2000;

  constructor(private titleService: Title, private zone: NgZone) {
    this.titleService.setTitle('BC | Home')
  }

ngOnInit(): void {
    // Run typing outside Angular's zone to avoid blocking stabilization
    this.zone.runOutsideAngular(() => this.type());
  }

  type() {
  const currentPhrase = this.phrases[this.currentPhraseIndex];

  let updatedText = '';

  if (this.isDeleting) {
    updatedText = currentPhrase.substring(0, this.currentCharIndex - 1);
    this.currentCharIndex--;
  } else {
    updatedText = currentPhrase.substring(0, this.currentCharIndex + 1);
    this.currentCharIndex++;
  }

  this.updateText(updatedText);

  let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

  if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
    this.isDeleting = true;
    delay = this.delayBetweenPhrases;
  } else if (this.isDeleting && this.currentCharIndex === 0) {
    this.isDeleting = false;
    this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
    delay = 500;
  }

  setTimeout(() => this.type(), delay);
}


  // This method ensures the text is updated within Angular zone
  updateText(newText: string) {
    this.zone.run(() => {
      this.dynamicText = newText;
    });
  }

}
