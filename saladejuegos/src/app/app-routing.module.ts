import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { RutaUnoComponent } from './components/ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './components/ruta-dos/ruta-dos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'rutauno',
    component: RutaUnoComponent
  },
  {
    path:'rutados',
    component: RutaDosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
