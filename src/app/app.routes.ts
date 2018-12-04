import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent}, // mostra componente principal
    {path: 'about', component: AboutComponent},
    {path: 'restaurants', component: RestaurantsComponent}
]