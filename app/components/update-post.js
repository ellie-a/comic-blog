import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        photo: this.get('photo'),
        title: this.get('title'),
        text: this.get('text'),
        date: this.get('date'),
        author: this.get('author')
      };
      this.set('updatePostForm', false);
      this.sendaction('update', post, params);
    }
  }
});
