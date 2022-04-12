import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme')
  // public links: NodeListOf<Element> = document.querySelectorAll('.selector');

  constructor() {
    const url = localStorage.getItem('themeUrl') || './assets/css/colors/default.css'
    this.linkTheme?.setAttribute('href',url)
   }

   changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`

    this.linkTheme?.setAttribute('href', url)

    localStorage.setItem('themeUrl', url)

    this.checkCurrentTheme()

  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector')

    links.forEach((element) => {
      element.classList.remove('working')
      const btnTheme = element.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href')
      if (btnThemeUrl === currentTheme) {
        element.classList.add('working')
      }
    })


  }
}
