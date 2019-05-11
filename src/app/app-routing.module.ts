import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'factory',
  //   loadChildren: './factory/factory.module#FactoryModule'
  // },
  {
    path: 'abstract-form',
    loadChildren: './abstract-factory/abstract-factory.module#AbstractFactoryModule'
  },
  {
    path: 'dynamic-provider',
    loadChildren: './dynamic-provider/dynamic-provider.module#DynamicProviderModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
