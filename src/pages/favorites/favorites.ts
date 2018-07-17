import { SettingsService } from './../../services/settings';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})

export class FavoritesPage {

  public quotes: Quote[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private settingService: SettingsService
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  viewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.removeQuoteFromFavorites(quote);
      }
    });
  }

  removeQuoteFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    // this.quotes = this.quoteService.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackground() {
    return this.settingService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingService.isAltBackground();
  }

}
