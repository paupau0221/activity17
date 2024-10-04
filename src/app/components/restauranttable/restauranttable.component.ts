import { Component } from '@angular/core';
interface Restaurant {
  id: number;
  name: string;
  location: string;
  cuisineType: string;
  establishedYear: number;
  websiteOrContact: string;
}
@Component({
  selector: 'app-restauranttable',
  templateUrl: './restauranttable.component.html',
  styleUrl: './restauranttable.component.css'
})
export class RestauranttableComponent {
  restaurants: Restaurant[] = [
    { id: 1, name: "Vikings Luxury Buffet", location: "Pasay City", cuisineType: "Buffet", establishedYear: 2011, websiteOrContact: "www.vikings.ph" },
    { id: 2, name: "Antonio's Restaurant", location: "Tagaytay", cuisineType: "Fine Dining", establishedYear: 2002, websiteOrContact: "www.antoniosrestaurant.ph" },
    { id: 3, name: "Mesa Filipino Moderne", location: "Makati City", cuisineType: "Filipino", establishedYear: 2009, websiteOrContact: "www.mesa.ph" },
    { id: 4, name: "Manam Comfort Filipino", location: "Quezon City", cuisineType: "Filipino", establishedYear: 2013, websiteOrContact: "www.manam.ph" },
    { id: 5, name: "Ramen Nagi", location: "Various Locations", cuisineType: "Japanese", establishedYear: 2013, websiteOrContact: "www.ramennagi.com.ph" }
  ];
}
