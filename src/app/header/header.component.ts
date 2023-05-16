import { Component, EventEmitter, Output } from '@angular/core';
import {Post} from '../../post';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() postTypeSelected = new EventEmitter<string>();

  postTypes: string[] = ['horse', 'bird', 'fish',"snake"]; 

  constructor() { }

  onPostTypeSelect(postType: string): void {
    this.postTypeSelected.emit(postType);
  }

}

