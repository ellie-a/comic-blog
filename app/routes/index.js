import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    update(post, params) {
      debugger;
      post.save();
      this.transitionTo('index');
    },
      destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
