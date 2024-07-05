import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit {
  errorContainer ! : HTMLParagraphElement
  constructor(
    private EleRef :ElementRef
  ) { }

  ngOnInit(): void {
    this.errorFormatVal()
  }

  @HostListener('input',['$event'])
  validateCreditCard(eve:Event){

    let inputControl=eve.target as HTMLInputElement

    let val = inputControl.value.replace(/\s+/g, '') as string

    if(val.length > 16){
      val = val.substring(0,16)
    }
    
    if(/[^\d]/.test(val)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')
    }

    val= this.chunkArrFormat(val)
    inputControl.value = val
    console.log(val);
  }

  chunkArrFormat(val:string){
    let chunkArr=[];

    for(let i=0; i<val.length; i+=4){
      chunkArr.push(val.slice(i, i+4))
    }
    return chunkArr.join(" ")
  }

  errorFormatVal(){
    this.errorContainer =document.createElement('p')
    this.errorContainer.innerHTML ="Plase enter valide details"
    this.errorContainer.className="alert alert-info mt-4 d-none"
    this.EleRef.nativeElement.parentNode?.append(this.errorContainer)
  }

}
