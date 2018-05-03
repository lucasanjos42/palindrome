import { Component } from '@angular/core';
import { GlobalService } from './global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  palindrome: string = '';
  result: boolean;

  constructor(private globalService: GlobalService) {

  }

  checkPalindrome() {

      const data = {
        word: this.palindrome
      };

      this.globalService.palindrome(data)
        .subscribe(res => {
          this.result = true;
        },
        err => {
          this.result = false;
        })

  }
}
