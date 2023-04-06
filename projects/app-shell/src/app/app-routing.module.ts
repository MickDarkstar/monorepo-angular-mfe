import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: () => 
      loadRemoteModule( {
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        type: 'module',
        exposedModule: './Module'
      }).then((m) => {
        return m.ItemsModule
      })
  }, 
  {
    path: 'auth',
    loadChildren: () => 
      loadRemoteModule( {
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        type: 'module',
        exposedModule: './Module'
      }).then((m) => {
        return m.AuthModule
      })
  }, 
  // {
  //   path: 'auth',
  //   loadChildren: () => import('mf2Auth/Module').then(m => m.AuthModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
