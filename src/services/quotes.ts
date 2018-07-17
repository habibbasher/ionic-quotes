import { Quote } from "../data/quote.interface";



export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorite(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const possition = this.favoriteQuotes.findIndex((quoteEl) => {
      return quoteEl.id === quote.id;
    });
    this.favoriteQuotes.splice(possition, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
  }

}
