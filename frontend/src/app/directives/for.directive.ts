import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]',
})

/* Exemplo
    <ul>
        <li *myFor="let n em [1, 2, 3]"></li>
    </ul>
*/
export class ForDirective implements OnInit {
  @Input('myForEm') numbers: number[];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    this.numbers = [];
  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
