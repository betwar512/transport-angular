import { Component } from '@angular/core';


@Component({
    selector: 'app-autocomplete',
    styles: [``],
    template: `
      <div class="container">
        <h1>Angular 2 + Google Maps Places Autocomplete</h1>
        <div class="form-group">
          <input placeholder="search for location" autocorrect="off" autocapitalize="off" spellcheck="off"
           type="text" class="form-control" #search [formControl]="searchControl">
        </div>
      </div>
    `
  })
  export class AddressAutoCompleteComponent {
    searchControl: string;
  }