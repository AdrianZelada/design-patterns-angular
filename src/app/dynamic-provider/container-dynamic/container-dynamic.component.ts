import {
  AfterContentInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Input,
  OnInit, ReflectiveInjector,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {ServiceOne} from '../service-one';
import {ServiceTwo} from '../service-two';
import {DynamicProComponent} from '../dynamic-pro/dynamic-pro.component';

@Component({
  selector: 'app-container-dynamic',
  templateUrl: './container-dynamic.component.html',
  styleUrls: ['./container-dynamic.component.scss']
})
export class ContainerDynamicComponent implements OnInit , AfterContentInit {

  @ViewChild('content',{ read: ViewContainerRef }) content;
  @Input() type: string;
  private componentRef : ComponentRef<DynamicProComponent>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const service: any= this.type === 'one' ? ServiceOne : ServiceTwo;
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(DynamicProComponent);
    const injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'dynamic',
        useClass: service
      }
    ]);
    this.componentRef = this.content.createComponent(factory, 0, injector);
    console.log(service)
  }

}
