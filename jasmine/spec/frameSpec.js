// Count and sum the scores of a bowling game for one player (in JavaScript).
// A bowling game consists of 10 frames in which the player tries to knock down
// the 10 pins. In every frame the player can roll one or two times.
// The actual number depends on strikes and spares. The score of a frame is the
// number of knocked down pins plus bonuses for strikes and spares.
// After every frame the 10 pins are reset.
// 'use strict';

describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("exists", function(){
    expect(frame).toBeDefined();
  });

  it("contains roll1 and roll2", function(){
    var _roll1;
    var _roll2
    expect(frame._roll1).toBeDefined();
    expect(frame._roll2).toBeDefined();
  });

  it("has a score", function(){
    var _score;
    expect(frame._score).toBeDefined();
  });

  it("has a bonus", function(){
    var _bonus;
    expect(frame._bonus).toBeDefined();
  });

  it("has a roll1 method", function(){
    expect(frame.roll1).toBeDefined();
  });

  it("has a roll2 method", function(){
    expect(frame.roll2).toBeDefined();
  });

  it("has a getFrameScore method", function(){
    expect(frame.getFrameScore).toBeDefined();
  });

  it("has a getBonus method", function(){
    expect(frame.getBonus).toBeDefined();
  });

  describe('#roll1', function() {
    var frame;
    beforeEach(function() {
      frame = new Frame();
    });

    it ('returns a number of pins knocked down after the first roll', function() {
      frame.roll1();
      expect(typeof frame._roll1).toEqual('number');
    });
    it ('can knock down 0 - 10 pins', function() {
      frame.roll1();
      expect(frame._roll1).toBeLessThan(10);
    });
    it ('adds the number of pins knocked down to the frame score', function() {
      spyOn(frame, 'roll1').and.returnValue(5);
      expect(frame._score).toEqual(frame._score + frame._roll1);
    });
  });

  describe('#roll2', function() {
    var frame;
    beforeEach(function() {
      frame = new Frame();
    });

    it ('returns a number of pins knocked down after the second roll', function() {
      frame.roll2();
      expect(typeof frame._roll2).toEqual('number');
    });
    it ('can knock down 0 - 10 pins', function() {
      frame.roll2();
      expect(frame._roll2).toBeLessThan(10);
    });
    it ('adds the number of pins knocked down to the frame score', function() {
      spyOn(frame, 'roll2').and.returnValue(5);
      expect(frame._score).toEqual(frame._score + frame._roll2);
    });
  });


  describe('#getFrameScore', function() {
    var frame;
    beforeEach(function() {
      frame = new Frame();
    });
    it ('returns the total score for the frame', function() {
      spyOn(frame, 'roll1').and.returnValue(1);
      spyOn(frame, 'roll2').and.returnValue(2);
      var x = 0;
      x = frame.getFrameScore();
      expect(frame._score).toEqual(x);
    });
  });

  describe('#getBonus', function() {
    var frame;
    beforeEach(function() {
      frame = new Frame();
    });
    it ('is a strike (X) if roll1 is 10', function() {
      spyOn(frame, 'roll1').and.returnValue(10);
      var y = "";
      y = frame.getBonus();
      expect(frame._bonus).toEqual(y);
    });

    it ('is a strike (X) if roll2 is 10', function() {
      spyOn(frame, 'roll2').and.returnValue(10);
      var a = "";
      a = frame.getBonus();
      expect(frame._bonus).toEqual(a);
    });

    it ('is a half-strike (/) if sum of roll1 + roll2 is 10', function() {
      spyOn(frame, 'roll1').and.returnValue(5);
      spyOn(frame, 'roll2').and.returnValue(5);
      var b = "";
      b = frame.getBonus();
      expect(frame._bonus).toEqual(b);
    });

    it ('is nothing ("") if sum of roll1 + roll2 is less than 10', function() {
      spyOn(frame, 'roll1').and.returnValue(5);
      spyOn(frame, 'roll2').and.returnValue(4);
      var c = "";
      c = frame.getBonus();
      expect(frame._bonus).toEqual(c);
    });

  });




});
