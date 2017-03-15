import { Component } from '@angular/core';
@Component({
  
  template: `
  <ion-header>
    <ion-navbar align-title="center">
      <ion-title side ="Center">Tabs1</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
  <ion-card>
    <img src="./assets/images/card-saopaolo.png"/>
    <div class="card-title">São Paulo</div>
    <div class="card-subtitle">41 Listings</div>
  </ion-card>

  <ion-card>
    <img src="./assets/images/card-amsterdam.png"/>
    <div class="card-title">Amsterdam</div>
    <div class="card-subtitle">64 Listings</div>
  </ion-card>

  <ion-card>
    <img src="./assets/images/card-sf.png"/>
    <div class="card-title">San Francisco</div>
    <div class="card-subtitle">72 Listings</div>
  </ion-card>

  <ion-card>
    <img src="./assets/images/card-madison.png"/>
    <div class="card-title">Madison</div>
    <div class="card-subtitle">28 Listings</div>
  </ion-card>
  </ion-content>
  `
})
export class ContentTab1 {
  constructor() {}
}