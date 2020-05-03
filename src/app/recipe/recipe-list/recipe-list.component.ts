import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Soon Du Bu Jjigae', 'Korean soft tofu stew', 'https://coupleeatsfood.com/wp-content/uploads/2017/10/Spicy-Korean-Silken-Soft-Tofu-Stew-Recipe-1-2-e1508776085333.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
