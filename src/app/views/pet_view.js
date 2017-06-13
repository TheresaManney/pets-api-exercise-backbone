import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Pet from 'app/models/pet.js';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template({ pet: this.model.toJSON()});
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.alert' : 'deletePet',
    'click li' : 'onClick'
  },
  deletePet: function() {
    this.model.destroy();
  },
  onClick: function() {
    var click = this.trigger('selected', this.model);
    console.log('click', click);
  }
});

export default PetView;
