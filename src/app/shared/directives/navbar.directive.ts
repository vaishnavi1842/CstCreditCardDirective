import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {
  showHideHandler : boolean =false
  constructor(
    private EleRef : ElementRef,
    private rendrer : Renderer2
  ) { }

  @HostListener('click',['$event'])
  onBtnClick(eve:Event){
      let ele = this.EleRef.nativeElement.nextElementSibling as HTMLElement
      
     if(!this.showHideHandler){
        this.rendrer.addClass(ele, 'show')
        this.showHideHandler=true
     }else{
      this.rendrer.removeClass(ele,'show')
      this.showHideHandler=false

     }
     
    // let btn=eve.target as HTMLElement

    // btn.parentElement?.nextElementSibling?.classList.toggle('show')

  }

}
