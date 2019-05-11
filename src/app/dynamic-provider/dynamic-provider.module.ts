import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMainComponent } from './content-main/content-main.component';
import { ContainerDynamicComponent } from './container-dynamic/container-dynamic.component';
import { DynamicProComponent } from './dynamic-pro/dynamic-pro.component';
import {DynamicProviderRoutingModule} from './dynamic-provider-routing.module';
export const DYNA = new InjectionToken<any>('DYNA');

@NgModule({
  declarations: [ContentMainComponent, ContainerDynamicComponent, DynamicProComponent],
  entryComponents: [ContentMainComponent, ContainerDynamicComponent, DynamicProComponent],
  // providers:[
  //   DYNA,
  // ]
  imports: [
    CommonModule,
    DynamicProviderRoutingModule
  ]
})
export class DynamicProviderModule { }
