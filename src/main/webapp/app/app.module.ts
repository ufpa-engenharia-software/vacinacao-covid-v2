import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { VacinacaoCovidV2SharedModule } from 'app/shared/shared.module';
import { VacinacaoCovidV2CoreModule } from 'app/core/core.module';
import { VacinacaoCovidV2AppRoutingModule } from './app-routing.module';
import { VacinacaoCovidV2HomeModule } from './home/home.module';
import { VacinacaoCovidV2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    VacinacaoCovidV2SharedModule,
    VacinacaoCovidV2CoreModule,
    VacinacaoCovidV2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    VacinacaoCovidV2EntityModule,
    VacinacaoCovidV2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class VacinacaoCovidV2AppModule {}
