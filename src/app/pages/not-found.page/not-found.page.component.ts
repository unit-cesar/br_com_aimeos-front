import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-not-found.page',
  templateUrl: './not-found.page.component.html',
  styleUrls: ['./not-found.page.component.scss']
})
export class NotFoundPageComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  goToUrl(): void {
    this.document.location.href = 'https://aimeosbrasil.com.br/';
  }

}
