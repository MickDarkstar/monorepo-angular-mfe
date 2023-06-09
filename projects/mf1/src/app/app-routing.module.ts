import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
}, {
  path: 'items',
  loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
