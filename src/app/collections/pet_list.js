import Backbone from 'backbone';

import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet,
  url: 'http://petdibs.herokuapp.com/pets',
  //might not need the parse because the array is not set to anything unlike task list api
  parse: function(data) {
    return data;
  }
});

export default PetList;
