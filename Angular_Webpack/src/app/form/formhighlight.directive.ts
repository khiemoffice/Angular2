import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';



@Directive({
    selector:'[myHighlight]'
})
export class FormHighlightComponent{
    @Input('myHighlight') highlightColor:string;
    
    constructor(private renderer: Renderer,private ele:ElementRef){
       
    }
    
    @HostListener('mouseenter') onMouseEnter(){
          
        console.log('day la ', this.highlightColor);
        
        this.highlight(this.highlightColor|| 'red');
    }

    @HostListener('mouseleave') eqweqw(){
       
        this.highlight(null)
    }


    private highlight(color:string){
        this.renderer.setElementStyle(this.ele.nativeElement, 'backgroundColor', color);
    }
}