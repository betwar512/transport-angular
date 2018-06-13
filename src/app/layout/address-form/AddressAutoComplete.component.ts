import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';


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
  export class AddressAutoCompleteComponent implements OnInit {
    public searchControl: FormControl;

    @ViewChild('search')
    public searchElementRef: ElementRef;

    ngOnInit(): void {
     this.searchControl = new FormControl();
     const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => { });
    }

  }
