import { KAppPage } from './app.po';

describe('kapp App', function() {
  let page: KAppPage;

  beforeEach(() => {
    page = new KAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
