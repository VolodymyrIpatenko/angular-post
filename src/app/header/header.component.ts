import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../post';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddModalComponent } from '../../app.modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(AddModalComponent);
  }

  @Output() postTypeSelected = new EventEmitter<string>();

  postTypes: string[] = ['horse', 'bird', 'fish',"snake"]; 

  

  onPostTypeSelect(postType: string): void {
    this.postTypeSelected.emit(postType);
  }

}

