import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {ProducttableComponent} from "./components/producttable/producttable.component";
import {EmployeetableComponent} from "./components/employeetable/employeetable.component";
import {BookstableComponent} from "./components/bookstable/bookstable.component";
import {UniversitytableComponent} from "./components/universitytable/universitytable.component";
import {RestauranttableComponent} from "./components/restauranttable/restauranttable.component";



const  routes: Routes = [
  { path: '', component: ProducttableComponent},
  { path: 'employee', component: EmployeetableComponent},
  { path: 'books', component: BookstableComponent},
  { path: 'university', component: UniversitytableComponent},
  { path: 'restaurant', component: RestauranttableComponent},

]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProducttableComponent,
    EmployeetableComponent,
    BookstableComponent,
    UniversitytableComponent,
    RestauranttableComponent,

  ],
  providers: [

  ],

  bootstrap: [
    AppComponent,


  ],

})

export class AppModule { }

