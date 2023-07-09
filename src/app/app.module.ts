import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerminalesComponent } from './componentes/terminales/terminales.component';
import { AppRoutingModule } from './app-routing.module';
import { ComprarComponent } from './componentes/comprar/comprar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoFormularioComponent } from './componentes/contacto-formulario/contacto-formulario.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { PaginacionComponent } from './componentes/paginacion/paginacion.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { FormsModule } from '@angular/forms';
import { ProcesarPagoComponent } from './componentes/procesar-pago/procesar-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    FooterComponent,
    ContenidoComponent,
    InicioComponent,
    TerminalesComponent,
    ComprarComponent,
    HomeComponent,
    ContactoFormularioComponent,
    IngresarComponent,
    PaginacionComponent,
    CarritoComponent,
    CrearCuentaComponent,
    RecuperarPasswordComponent,
    PromocionesComponent,
    ProcesarPagoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
