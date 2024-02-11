import { Component, OnInit } from '@angular/core';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { Recipe } from '../recipes.model';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipesItemComponent, CommonModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipesz : Recipe[]= [
    new Recipe('Paneer Chilli', 'This is a chineese dish loved by people of all ages', 'https://i.imgur.com/akENuRm.png'),
    new Recipe('Paneer Chilli', 'This is a chineese dish loved by people of all ages', 'https://i.imgur.com/akENuRm.png'),
  ];

  constructor(){}

  ngOnInit(): void {
      
  }
}
