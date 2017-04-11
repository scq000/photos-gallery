import { Component,OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    selector: 'store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
    public selectedCategory = null;
    public productsPerPage = 3;
    public selectedPage = 1;

    constructor(private repository: ProductRepository) {}

    ngOnInit() {}

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        let pageCount = this.repository.getProducts(this.selectedCategory).length / this.productsPerPage;
        return Array(Math.ceil(pageCount)).fill(0).map((x, i) => i + 1);
    }
}
