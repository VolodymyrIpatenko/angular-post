// import { Component, OnInit } from '@angular/core';
// import { Post } from '../../post';
// import { PostService } from '../../post.service';
// import { map, startWith } from "rxjs/operators";
// import { combineLatest, Observable, of } from "rxjs";
// import { debounceTime, distinctUntilChanged } from "rxjs/operators";
// import { FormControl } from "@angular/forms";

// @Component({
//   selector: 'app-post-list',
//   templateUrl: './post-list.component.html',
//   styleUrls: ['./post-list.component.css']
// })
// export class PostListComponent implements OnInit {
  
//   title = 'angular-infinite-scroll-example';
//   page = 1;
//   cats: Post[] = [];
//   filteredCats: Post[] = [];
//   searchText!: string;

//   constructor(private postService: PostService) { }

//   ngOnInit(): void {
//     this.postService
//       .getPosts(this.page)
//       .subscribe((cats: Post[]) => {
//         this.cats = cats;
//         this.filteredCats = cats; 
//       });
//   }

//   onScroll(): void {
//     this.postService
//       .getPosts(++this.page)
//       .subscribe((cats: Post[]) => {
//         this.cats.push(...cats);
//         this.applyFilter(); 
//       });
//   }

//   applyFilter(): void {
//     const searchText = this.searchText.trim().toLowerCase();
//     this.filteredCats = this.cats.filter((cat: Post) =>
//       cat.topic.toLowerCase().includes(searchText)
//     );
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
// import { PostService } from '../../post.service';
import { PostService } from '../../post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  startDate: string | null = null;
  endDate: string | null = null;

  page = 1;
  cats: Post[] = [];
  filteredCats: Post[] = [];
  searchText!: string;
  selectedPostType: string | null = null;
  private postTypeSubscription:Subscription= Subscription.EMPTY;
  
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
    this.postTypeSubscription = this.postService.selectedPostType$.subscribe(
      postType => {
        this.selectedPostType = postType;
        this.applyFilter();
      }
    );
  }

  ngOnDestroy(): void {
    this.postTypeSubscription.unsubscribe();
  }

  getPosts(): void {
    this.postService.getPosts(this.page).subscribe((cats: Post[]) => {
      this.cats = cats;
      this.applyFilter();
    });
  }

  loadMorePosts(): void {
    this.page++;
    this.getPosts();
  }

  applyFilter(): void {
    let filteredCats = this.cats;

    if (this.searchText) {
      const searchText = this.searchText.trim().toLowerCase();
      filteredCats = filteredCats.filter((cat: Post) =>
        cat.topic.toLowerCase().includes(searchText)
      );
    }

    if (this.selectedPostType) {
      filteredCats = filteredCats.filter((cat: Post) =>
        cat.topic === this.selectedPostType
      );
    }


    if (this.startDate && this.endDate) {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);

    filteredCats = filteredCats.filter((cat: Post) => {
      const postDate = new Date(cat.createdAt);
      return postDate >= startDate && postDate <= endDate;
    });
  }


    this.filteredCats = filteredCats;
  }

  onSearchInput(): void {
    this.applyFilter();
  }

  onPostTypeSelected(postType: string): void {
    this.selectedPostType = postType !== 'All' ? postType : null;
    this.applyFilter();
  }
}
