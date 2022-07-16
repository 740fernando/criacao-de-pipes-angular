import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';

const routes: Routes = [
  { path: 'pipes', component: PipesExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
