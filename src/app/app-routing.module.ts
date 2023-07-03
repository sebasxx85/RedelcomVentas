import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalesComponent } from './componentes/terminales/terminales.component';
import { HomeComponent } from './componentes/home/home.component';
import { ComprarComponent } from './componentes/comprar/comprar.component';
import { ContactoFormularioComponent } from './componentes/contacto-formulario/contacto-formulario.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'terminales', component: TerminalesComponent},
  { path: 'comprar', component: ComprarComponent},
  { path: 'contacto', component: ContactoFormularioComponent},
  { path: 'ingresar', component: IngresarComponent},
  { path: '**', redirectTo: '/home' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

//debo exportarla para agregarla al app.module
export class AppRoutingModule {}