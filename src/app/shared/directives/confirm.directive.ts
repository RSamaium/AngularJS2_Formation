import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core'

@Directive({
    selector: '[prompt]'
})
export class ConfirmDirective {

    @Input('prompt') msg:string 
    @Input() mediaId:number
    @Output() onConfirm:EventEmitter<boolean> = new EventEmitter()

    @HostListener('click', ['$event'])
    onConfirmDialog(ev:Event) {
        const bool = confirm(this.msg + '#' + this.mediaId)
        this.onConfirm.emit(bool)
    }

}