import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurant/restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  // propriedade não precisa ser criada antes, ao declará-la na DI já é criada e instanciada
  constructor(private restaurantService: RestaurantService) { }


  ngOnInit() {
    // método subscribe que realiza a chamada http declarada em service
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
