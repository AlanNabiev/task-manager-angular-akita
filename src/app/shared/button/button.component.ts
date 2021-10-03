import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  
  @Input() to: string = "";
  @Output() onClick = new EventEmitter<boolean>();


  @Input() size:string = ""
  get btnSizeClasses(): string { 
    switch(this.size) {
        case 'xs':
          return 'p-2 text-sm';
        case 'sm':
          return 'p-3 text-base';
        case 'md':
          return 'p-4 text-lg';
        case 'lg':
          return 'w-full py-3 text-2xl';
        default:
          return 'p-3 text-base';
          
      } }

  @Input() disabled:boolean = false;
  @Input() color:string = "";
  get btnColorClasses(): string {
    if(this.disabled) {
      return 'bg-gray-300 text-white cursor-default'
    }
    switch(this.color) {
      case 'blue':
        return 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
      case 'red':
        return 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500'
      case 'green':
        return 'text-white bg-green-600 hover:bg-green-700 focus:ring-green-500'
      case 'white':
        return 'text-black shadow-md hover:bg-gray-100 focus:ring-gray-300'
      default:
        return 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
    }
  }
  
  loading: boolean = false
  clickEvent() {
      this.onClick.emit();
  }
}
