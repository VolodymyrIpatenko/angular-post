import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';
import { map, startWith } from "rxjs/operators";
import { combineLatest, Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  title = 'angular-infinite-scroll-example';
  
  page = 1;
  
  cats: Post[] = [];
  filteredCats: Post[] = [];
  searchText!: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService
      .getPosts(this.page)
      .subscribe((cats: Post[]) => {
        this.cats = cats;
        this.filteredCats = cats; 
      });
  }

  onScroll(): void {
    this.postService
      .getPosts(++this.page)
      .subscribe((cats: Post[]) => {
        this.cats.push(...cats);
        this.applyFilter(); 
      });
  }

  applyFilter(): void {
    const searchText = this.searchText.trim().toLowerCase();
    this.filteredCats = this.cats.filter((cat: Post) =>
      cat.type.toLowerCase().includes(searchText)
    );
  }

  
}


