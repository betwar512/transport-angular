import { PersonDto } from "./PersonDto";
import { AddressDto } from "./AddressDto";

export class UploadClientBody{
  
    public client:PersonDto;
    public clientAddress: AddressDto;
    public contactPerson: PersonDto;
    public contactAddress: AddressDto;

    public type: string = "enterclientintosystem";
}