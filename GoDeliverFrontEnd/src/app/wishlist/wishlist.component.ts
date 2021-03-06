import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../book.service";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"]
})
export class WishlistComponent implements OnInit {
  book: any;
  bookList = [];
  deleteList: any;
  constructor(
    private router: ActivatedRoute,
    private bookService: BookService
  ) {}
  ngOnInit() {
    this.bookService
      .getWishList()
      .subscribe(fullList => (this.bookList = fullList));
    console.log(this.bookList);
  }
  delete(id) {
    this.bookService
      .deleteWishList(id)
      .subscribe(data => (this.deleteList = data));
  }
}
