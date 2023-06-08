

import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../post.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() postTypeSelected = new EventEmitter<string>();

  postTypes: string[] = ['Travel', 'Home', 'Hobby', 'Lifestyle'];

  constructor(private postService:PostService) {}

  filterByPostType(postType: string): void {
    this.postService.selectPostType(postType);
    this.postTypeSelected.emit(postType);
  }
}
