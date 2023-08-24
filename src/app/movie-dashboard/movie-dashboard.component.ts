import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent {
  myFavoriteMovies = [ 'Encanto', 
  'Spider-Man: No Way Home', 
  "Harry Potter and the Sorcerer's Stone" ];  

  selectedMovieToWatch(data: string) {
    debugger;
    alert(data);
  }
}
