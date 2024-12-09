import { Directive, Input, IterableDiffers, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomfor]',
  standalone: true
})
export class CustomforDirective {

  @Input() appCustomfor: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appCustomfor'] && Array.isArray(this.appCustomfor)) {
      this.viewContainerRef.clear(); // Önceki görünümleri temizle
      this.appCustomfor.forEach((item, index) => {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index: index,
        });
      });
    }
  }
  
}
