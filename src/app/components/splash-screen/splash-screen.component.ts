import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  isVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, 2000); // 2 saniyelik splash süresi
  }
}
