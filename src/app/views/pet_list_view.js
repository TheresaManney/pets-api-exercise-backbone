import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import PetView from './pet_view.js';
import Pet from 'app/models/pet.js';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    this.$('#pet-list').empty();
    var that = this;
    console.log(this.model.length);
    this.model.each(function(pet) {
      console.log(pet);
      var petView = new PetView({
        model: pet,
        template: that.template
      });
      console.log(petView.render().$el);
      that.$('#pet-list').append(petView.render().$el);
    });
    return this;
  }
});

export default PetListView;
