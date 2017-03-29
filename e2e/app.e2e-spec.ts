import { DeredormPage } from './app.po';

describe('deredorm App', function() {
  let page: DeredormPage;

  beforeEach(() => {
    page = new DeredormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
