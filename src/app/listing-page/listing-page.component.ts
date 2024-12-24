import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import cardData from '../utils/mockData.json'

@Component({
    selector: 'app-listing-page',
    templateUrl: './listing-page.component.html',
    styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {
    sortOrder: string = 'atoz';
    rewardCards = cardData.card_data.rewardCards
    constructor() { }

    // Method to sort the array based on A to Z or Z to A
    sortRewards(order: string) {
        if (order === 'atoz') {
            this.rewardCards.sort((a, b) => a.name.localeCompare(b.name));
            this.sortOrder = "atoz"
        } else if (order === 'ztoa') {
            this.rewardCards.sort((a, b) => b.name.localeCompare(a.name));
            this.sortOrder = 'ztoa'
        }
    }

    ngOnInit() {

    }
}
