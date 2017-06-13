import $ from 'jquery';
import _ from 'underscore';
import Pet from 'app/models/pet.js';
import PetList from 'app/collections/pet_list.js';
import PetView from 'app/views/pet_view.js';
import PetListView from 'app/views/pet_list_view.js';

var myPetList = new PetList();

var successCallback = function() {
  var myPetListView = new PetListView ({
    model: myPetList,
    template: _.template($('#pet-card-template').html()),
    deetTemplate: _.template($('#pet-info-template').html()),
    el: 'body'
  });
  myPetListView.render();
};

$(document).ready(function() {
  myPetList.fetch({
    success: successCallback
  });

});
