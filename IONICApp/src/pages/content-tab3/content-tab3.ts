import { Component } from '@angular/core';
@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Tabs3</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-card>
  <ion-card-header>
    Explore Nearby
  </ion-card-header>

  <ion-list>
    <button ion-item>
      <ion-icon name="cart" item-left></ion-icon>
      Shopping
    </button>

    <button ion-item>
      <ion-icon name="medical" item-left></ion-icon>
      Hospital
    </button>

    <button ion-item>
      <ion-icon name="cafe" item-left></ion-icon>
      Cafe
    </button>

    <button ion-item>
      <ion-icon name="paw" item-left></ion-icon>
      Dog Park
    </button>

    <button ion-item>
      <ion-icon name="beer" item-left></ion-icon>
      Pub
    </button>

    <button ion-item>
      <ion-icon name="planet" item-left></ion-icon>
      Space
    </button>

  </ion-list>
</ion-card>

  </ion-content>
  `
})
export class ContentTab3 {
  constructor() {}
}