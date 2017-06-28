import { MultiappsExamplePage } from './app.po';

describe('multiapps-example App', () => {
  let page: MultiappsExamplePage;

  beforeEach(() => {
    page = new MultiappsExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
