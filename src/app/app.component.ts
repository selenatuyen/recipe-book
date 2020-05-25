import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipes';
  selectedFeature: string = 'recipe';

   onNavigate(event): void{
    this.selectedFeature = event;
  }
}

