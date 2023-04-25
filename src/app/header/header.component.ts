import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectedPage = new EventEmitter<string>()

  onSelect(page: string) {
    this.selectedPage.emit(page)
  }
}
