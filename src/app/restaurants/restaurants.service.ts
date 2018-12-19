import { Restaurant } from "app/restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { MEATAPI } from '../app.api'
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from '../app.error'

// marcada como injetável para poder injetar o http
@Injectable()
export class RestaurantService{

    constructor(private http: Http){}


    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${MEATAPI}/restaurants`)
            .map(response => response.json())
            .catch( ErrorHandler.handleError ) // tratamento de possíveis erros
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEATAPI}/restaurants/${id}`)
            .map(response => response.json())
            .catch( ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEATAPI}/restaurants/${id}/reviews`)
            .map(response => response.json)
            .catch( ErrorHandler.handleError )
    }
}