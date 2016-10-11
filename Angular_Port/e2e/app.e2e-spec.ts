import { AngularPortPage } from './app.po';

describe('angular-port App', function() {
  let page: AngularPortPage;

  beforeEach(() => {
    page = new AngularPortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
