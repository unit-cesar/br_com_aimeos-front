import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss']
})
export class HomePageComponent {

  contact_support = 'admin@aimeos.com.br';
  h_path_logo_top = ['../../../assets/img/logo-top.png', 'aimeos brasil top logo'];
  h_path_logo = ['../../../assets/img/logo.png', 'aimeos brasil logo'];
  h_description = 'Comunidade brasileira do Aimeos';
  h_app_txts = ['Comunidade extraoficial', 'Projetos Open Source', 'E-commerces e marketplaces no Brasil'];
  page_footer_txts = ['@ ' + new Date().getFullYear() + ' aimeos.com.br', 'Política de Privacidade e Termos de Uso', 'mailto:' + this.contact_support];

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  goToUrl(target: string): void {
    if (target == 'openproject') {
      this.document.location.href = 'https://openproject.aimeos.com.br/';
    }
  }


}
