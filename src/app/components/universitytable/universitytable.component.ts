import { Component } from '@angular/core';
interface University {
  id: number;
  name: string;
  location: string;
  establishedYear: number;
  type: string;
  website: string;
}
@Component({
  selector: 'app-universitytable',
  templateUrl: './universitytable.component.html',
  styleUrl: './universitytable.component.css'
})
export class UniversitytableComponent {
  universities: University[] = [
    { id: 1, name: "University of the Philippines", location: "Quezon City", establishedYear: 1908, type: "Public", website: "www.up.edu.ph" },
    { id: 2, name: "Ateneo de Manila University", location: "Quezon City", establishedYear: 1859, type: "Private", website: "www.ateneo.edu" },
    { id: 3, name: "De La Salle University", location: "Manila", establishedYear: 1911, type: "Private", website: "www.dlsu.edu.ph" },
    { id: 4, name: "University of Santo Tomas", location: "Manila", establishedYear: 1611, type: "Private", website: "www.ust.edu.ph" },
    { id: 5, name: "Polytechnic University of the Philippines", location: "Manila", establishedYear: 1904, type: "Public", website: "www.pup.edu.ph" }
  ];
}
