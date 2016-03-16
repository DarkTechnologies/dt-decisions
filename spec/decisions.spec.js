const decisions = require('../decisions');

describe('Decisions Module', () => {
  it('should return a function', () => {
    var pickFavoriteFruit = decisions({
      'apples': 'you like apples!',
      'oranges': 'high in vitamin C!',
      'bananas': 'your not a monkey are you?',
      'default': 'Cant decide?'
    });
    expect(pickFavoriteFruit).toEqual(jasmine.any(Function));
  });
  
  it('should return oranages response', () => {
    var response = decisions({
      'apples': 'you like apples!',
      'oranges': 'high in vitamin C!',
      'bananas': 'your not a monkey are you?',
      'default': 'Cant decide?'
    })('oranges');
    expect(response).toBe('high in vitamin C!')
  });
  
  it('should execute and return a string value', () => {
    var response = decisions({
      'apples': function() {
        return 'you like apples!';
      },
      'oranges': function() {
        return 'high in vitamin C!';
      },
      'bananas': function() {
        return 'your not a monkey are you?';
      },
      'default': function() {
        return 'Cant decide?';
      }
    })('bananas');
    expect(response).toBe('your not a monkey are you?');
  });
  
  it('should execute with parameters', () => {
    var response = decisions({
      'apples': function(count) {
        return 'apples: '+count;
      },
      'oranges': function(count) {
        return 'oranges: '+count;
      },
      'bananas': function(count) {
        return 'bananas: '+count;
      },
      'default': function() {
        return 'Cant decide?';
      }
    })('apples', 4);
    expect(response).toBe('apples: 4');
  });
  
  it('should pick the default', () => {
    var response = decisions({
      'apples': function(count) {
        return 'apples: '+count;
      },
      'oranges': function(count) {
        return 'oranges: '+count;
      },
      'bananas': function(count) {
        return 'bananas: '+count;
      },
      'default': function() {
        return 'Cant decide?';
      }
    })();
    expect(response).toBe('Cant decide?');
  });
});