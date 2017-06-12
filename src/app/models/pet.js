import Backbone from 'backbone';

var Pet = Backbone.Model.extend({
  defaults: {
    name: 'Flufffff',
    age: '1',
    breed: 'who knows',
    vaccinated: false
  },
  logStatus: function(){
    console.log("Model " + this.cid);
    console.log("Name " + this.get("name"));
    console.log("Breed " + this.get("breed"));
  },
  initialize: function(params) {
    // console.log("Starting ", params);
    // this.logStatus();
  }
});

export default Pet;
