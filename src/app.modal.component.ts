import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-add-modal',
	templateUrl: "./app-modal.component.html",
	styleUrls:["./app-modal.component.css"],
  
})
export class AddModalComponent {
  constructor(public modalRef: BsModalRef) { }
}
