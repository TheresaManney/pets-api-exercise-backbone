import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import PetView from './pet_view.js';
import Pet from 'app/models/pet.js';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.detailsTemplate = _.template($('#pet-info-template').html());
  },
  render: function() {
    this.$('#pet').empty();
    this.$('#pet-list').empty();
    var that = this;
    // console.log(this.model.length);
    this.model.each(function(pet) {
      // console.log(pet);
      var petView = new PetView({
        model: pet,
        template: that.template
      });
      // console.log(petView.render().$el);
      that.listenTo(petView, "selected", that.petDetails);

      that.$('#pet-list').append(petView.render().$el);
    });
    return this;
  },
  events: {
    'click h1' : 'showPetList'
  },
  petDetails: function(pet) {
    $('#pet-list').hide();
    $('#pet').empty();
    $('#pet').show();

    var showPetDetails = this.detailsTemplate({pet: pet.attributes});

    this.$('#pet').append(showPetDetails);

  },
  showPetList: function() {
    // this.$('#pet-list').empty();
    this.$('#pet').hide();
    this.$('#pet-list').show();
  }
  // getFormData: function() {
  //   var from
  // }
});

export default PetListView;
