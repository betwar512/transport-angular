import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddressDto } from '../../../modeldtos/AddressDto';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() public formTitle: string = "Address form";
  @Input() public address:AddressDto;

  constructor() { }
  public searchControl: FormControl;

    @ViewChild('search')
    public searchElementRef: ElementRef;
    
  ngOnInit() {
    if(this.address == null){
        this.address = new AddressDto();
    }

    this.searchControl = new FormControl();
    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ['address']
    });

    autocomplete.addListener('place_changed', () => {
      let    place = autocomplete.getPlace();
      let jsonData = this.createAddressFromPlace(place);
      this.address.administrative_area_level_1 = jsonData['administrative_area_level_1'];
      this.address.administrative_area_level_2 = jsonData['administrative_area_level_2'];
      this.address.country = jsonData['country'];
      this.address.postal_code = jsonData['postal_code'];
      this.address.route = jsonData['route'];
      this.address.street_number = jsonData['street_number'];
    });


  }


 createAddressFromPlace(place) {

  var jsonData = {};

  if(place){
      for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
              var val = place.address_components[i][componentForm[addressType]];
              jsonData[addressType] = val;
          }
      }

      var le = place.geometry.location;
      jsonData['lat'] = le.lat();
      jsonData['lng'] = le.lng();
  }

  return jsonData;

}

}
//Google 

const componentForm = {
  subpremise:'short_name',
 street_number: 'short_name',
 route: 'long_name',
 locality: 'long_name',
 administrative_area_level_1: 'short_name',
 administrative_area_level_2: 'short_name',
 country: 'long_name',
 postal_code: 'short_name'
};
