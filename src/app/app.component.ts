import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';
  colorScheme: string | undefined;
  loading = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false;
    }, 3000)

    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
      this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
        // If the browser does not support prefers-color-scheme, set the default to dark.
        this.colorScheme = 'light';
    }
  }
}
