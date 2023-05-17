import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderComponent } from './app/header/header.component';
import {PostListComponent} from "./app/post-list/post-list.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPipe,
    PostListComponent
  ],
  imports: [
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatCardModule,
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    MatIconModule,
  MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
