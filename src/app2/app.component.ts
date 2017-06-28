import {Component} from '@angular/core';
import {SharedServiceService} from '../shared-module/services/shared-service/shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private sharedService: SharedServiceService) {
  }
}
