import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalesComponent } from './componentes/terminales/terminales.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoFormularioComponent } from './componentes/contacto-formulario/contacto-formulario.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { ComprarComponent } from './componentes/comprar/comprar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'terminales', component: TerminalesComponent},
  { path: 'comprar', component: ComprarComponent},
  { path: 'carrito', component: ComprarComponent},
  { path: 'promociones', component: PromocionesComponent},
  { path: 'contacto', component: ContactoFormularioComponent},
  { path: 'ingresar', component: IngresarComponent},
  { path: 'crear-cuenta', component: CrearCuentaComponent},
  { path: 'recuperar-password', component: RecuperarPasswordComponent},
  { path: '**', redirectTo: '/home' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

//debo exportarla para agregarla al app.module
export class AppRoutingModule {}