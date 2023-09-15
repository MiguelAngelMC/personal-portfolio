import { Component, OnInit} from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  colorScheme: string | undefined;
  darkMode = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
      this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
        // If the browser does not support prefers-color-scheme, set the default to dark.
        this.colorScheme = 'light';
    }
    if(this.colorScheme === 'dark'){
      this.darkMode = true;
    }
  }

  scroll(id: string){
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
  }

  checkCheckBoxvalue(event: any){
    if (event.checked) {
      this.themeService.enableDarkMode();
      this.darkMode = true;
    } else {
      this.themeService.disableDarkMode();
      this.darkMode = false;
    }
  }

}
