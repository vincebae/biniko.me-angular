import { Component, OnInit } from '@angular/core';
import { NgFeaturesService, NgFeature } from '../ng-features.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'biniko.me';
  features: Array<NgFeature> = [];

  constructor(private ngFeatures: NgFeaturesService) { }

  ngOnInit() {
    this.features = this.ngFeatures.getFeatures();
  }

}
