import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = FavoritesPage;
  public tab2Root = LibraryPage;

  constructor() {

  }
}
