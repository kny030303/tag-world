import StartView from './public/view/start-view';

class App {
  constructor() {
    const $app = document.querySelector('#app');
    if ($app) new StartView($app);
  }
}

new App();
