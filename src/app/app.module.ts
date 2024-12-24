import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ListingPageComponent,
        CategoryPageComponent,
        CategoryFilterComponent,
        SearchBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
