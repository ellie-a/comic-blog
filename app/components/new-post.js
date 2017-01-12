import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        photo: this.get('photo'),
        title: this.get('title'),
        text: this.get('text'),
        date: this.get('date'),
        author: this.get('author')
      };
      this.sendAction('savePost', params);
    }
  }
});
