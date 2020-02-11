const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    beforeEach(function () {
      park = new Park('Jurassic Park', 100, [dinosaur1, dinosaur]);
      dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
      dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 100);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.equal(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.equal(actual, 100)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.equal(actual, [dinosaur1, dinosaur2])
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
