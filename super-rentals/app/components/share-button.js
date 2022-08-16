import { service } from '@ember/service';
import Component from '@glimmer/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  @service router;

  get currentURL() {
    return window.location.href;
  }

  get shareURL() {
    let url = new URL(this.router.currentURL, window.location.origin);
    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtag) {
      url.searchParams.set('hashtag', this.args.hashtag);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
