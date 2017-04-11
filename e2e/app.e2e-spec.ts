import { SportStorePage } from './app.po';

describe('sport-store App', () => {
  let page: SportStorePage;

  beforeEach(() => {
    page = new SportStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
