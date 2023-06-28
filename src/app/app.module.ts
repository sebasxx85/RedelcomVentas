import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    FooterComponent,
    ContenidoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
