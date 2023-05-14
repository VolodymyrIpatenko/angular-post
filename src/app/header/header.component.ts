import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() postTypeSelected = new EventEmitter<string>();

  postTypes: string[] = ['Hobbies', 'Favourites', 'Travel']; 

  constructor() { }

  onPostTypeSelect(postType: string): void {
    this.postTypeSelected.emit(postType);
  }

}
