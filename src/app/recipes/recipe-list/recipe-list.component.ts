import { Component } from '@angular/core';
import { Recipe } from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] =[
    new Recipe('Peach & Blueberry Grunt','A cobbler-esque American favourite - this grunt has a bit of hidden sugar and spice, and is very very nice!','https://www.themealdb.com/images/media/meals/ssxvup1511387476.jpg'),
    new Recipe('Spaghetti alla Carbonara','Discover how to make traditional spaghetti carbonara. This classic Italian pasta dish combines a silky cheese sauce with crisp pancetta and black pepper.','https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg'),
    new Recipe('Dal fry','Dal fry ... is a popular Indian lentil recipe. This delicious recipe uses Toor dal, seasoned with variety of spices.','https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg')


  ];
  constructor() {}


}
