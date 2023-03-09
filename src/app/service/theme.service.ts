import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkTheme = false;

  constructor() { }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;

    const theme = this.darkTheme ? 'theme-dark' : 'theme-light';
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme);
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }
}
