import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  title = 'angular-infinite-scroll-example';
  
  page = 1;
  cats: Post[] = []

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService
      .getPosts(this.page)
      .subscribe((cats: Post[]) => {
        this.cats = cats;
      });
  }

  onScroll(): void {
    this.postService
      .getPosts(++this.page)
      .subscribe((cats: Post[]) => {
        this.cats.push(...cats);
      });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { Post } from '../../post';
// import { PostService } from '../../post.service';

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
//   postType: string = '';

//   constructor(private postService: PostService) {}

//   ngOnInit(): void {
//     this.getPosts();
//   }

//   getPosts(): void {
//     this.postService.getPosts(this.page).subscribe((cats: Post[]) => {
//       this.cats = cats;
//       this.applyFilter();
//     });
//   }

//   onScroll(): void {
//     this.page++;
//     this.getPosts();
//   }

//   applyFilter(): void {
//     this.filteredCats = this.cats.filter((cat: Post) =>
//       this.postType ? cat.type === this.postType : true
//     );
//   }

//   onPostTypeSelect(postType: string): void {
//     this.postType = postType;
//     this.applyFilter();
//   }

//   getUniqueTypes(cats: Post[]): string[] {
//   const types: string[] = [];
//   cats.forEach((cat: Post) => {
//     if (!types.includes(cat.type)) {
//       types.push(cat.type);
//     }
//   });
//   return types;
// }

// }
