import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import PetView from './pet_view.js';
import Pet from 'app/models/pet.js';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // this.detailsTemplate = _.template($('#pet-info-template').html());
    this.detailsTemplate = params.deetTemplate;
    this.listenTo(this.model, "update", this.render);
    //below is something Chris does.. he also includes the successCallback and errorCallbacks here
    // this makes the app.js very small. so the business logic stays in the views rather than app.js
    // this.model.fetch({reset: true});
  },
  render: function() {
    this.$('#pet').empty();
    this.$('#pet-list').empty();
    var that = this;
    // console.log(this.model.length);
    this.model.each(function(pet) {
      console.log(pet);
      var petView = new PetView({
        model: pet,
        template: that.template,
      });
      // console.log(petView.render().$el);
      that.listenTo(petView, "selected", that.petDetails);

      that.$('#pet-list').append(petView.render().$el);
    });
    return this;
  },
  events: {
    'click h1' : 'showPetList',
    'click #add-pet' : 'addPet'
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
  },
  updatePet: function() {

  },
  getFormData: function() {
    console.log('getFormData');
    var formName = this.$('#name').val();
    this.$('#name').val('');

    var formBreed = this.$('#breed').val();
    this.$('#breed').val('');

    var formAge = this.$('#age').val();
    this.$('#age').val('');

    var formVaccinated = this.$('#vaccinated-checkbox').is(":checked");
    this.$('#vaccinated-checkbox').prop('checked', false);

    if (formName === "") {
      return {
        breed: formBreed,
        age: formAge,
        vaccinated: formVaccinated
      };
    } else {
      return {
        name: formName,
        breed: formBreed,
        age: formAge,
        vaccinated: formVaccinated
      };

    }
  },
  addPet: function() {
    var pet = new Pet(this.getFormData());
    this.model.create(pet);
  }
});

export default PetListView;
