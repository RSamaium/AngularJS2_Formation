import { Directive, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[prompt]'
})
export class ConfirmDirective {

    @Input('prompt') msg:string 
    @Input() mediaId:number

    @HostListener('click', ['$event'])
    onConfirmDialog(ev:Event) {
        const bool = confirm(this.msg + '#' + this.mediaId)
        console.log(bool)
    }

}