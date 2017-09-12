import { MySimpleAngularAppPage } from './app.po';

describe('my-simple-angular-app App', () => {
  let page: MySimpleAngularAppPage;

  beforeEach(() => {
    page = new MySimpleAngularAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
