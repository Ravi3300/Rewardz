import { Component } from '@angular/core';

@Component({
    selector: 'app-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
    accordionItems = [
        { id: 1, icon: '☑️', text: 'e-Vocher ' },
        { id: 2, icon: '☑️', text: 'Products ' },
        { id: 3, icon: '☑️', text: 'Evergreent ' },
        { id: 4, icon: '☑️', text: 'Fashion & Retail ' }
    ];

}
