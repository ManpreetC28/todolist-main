import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return ['Practice', ' ReactJS', 'lea redux','Code portfolio in React','learn React Native'];
  }
}
