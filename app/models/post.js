import DS from 'ember-data';

export default DS.Model.extend({
  photo: DS.attr(),
  title: DS.attr(),
  text: DS.attr(),
  date: DS.attr(),
  author: DS.attr()
});
