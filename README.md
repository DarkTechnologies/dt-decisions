# dt-decisions
The better alternative to using case switch.

Simply define a object with all your options and the returned responses.  
Set that in Decisions and it returns a function that takes a parameter that is your selector.

```javascript
const decisions = require('dt-decisions');
userChoice = decisions({
  'apples': function() {
    console.log('you like apples!');
  },
  'oranges': function() {
    console.log('high in vitamin C!');
  },
  'bananas': function() {
    console.log('your not a monkey are you?');
  }
});
```

You can reuse this function through out your code!

```javascript
userChoice('apples');
userChoice('oranges');
userChoice('bananas');
```

Or you can call it in place to replace a case switch statement.

replace this mess...

```javascript
switch(userDecision) {
    case 'apples':
        console.log('you like apples!');
        break;
    case 'oranges':
        console.log('high in vitamin C!');
        break;
    case 'bananas':
        console.log('your not a monkey are you?');
        break;
    default:
        console.log('Cant decide?');
}
```

With this...

```javascript
decisions({
  'apples': function() {
    console.log('you like apples!');
  },
  'oranges': function() {
    console.log('high in vitamin C!');
  },
  'bananas': function() {
    console.log('your not a monkey are you?');
  },
  'default': function() {
    console.log('Cant decide?');
  }
})(userDecision);
```

Or just store the results.

```javascript
var usersFavoriteFruit = decisions({
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
})(userDecision);
```

But the above could be simplified to ...

```javascript
var usersFavoriteFruit = decisions({
  'apples': 'you like apples!',
  'oranges': 'high in vitamin C!',
  'bananas': 'your not a monkey are you?',
  'default': 'Cant decide?'
})(userDecision);
```

Or made reusable like...

```javascript
var pickFavoriteFruit = decisions({
  'apples': 'you like apples!',
  'oranges': 'high in vitamin C!',
  'bananas': 'your not a monkey are you?',
  'default': 'Cant decide?'
});
var yourFavoriteFruit = pickFavoriteFruit(usersChoice);
var yourFriendsFavoriteFruit = pickFavoriteFruit(friendsChoice);
```

Need fall through logic?  No prob just add a 'unknown' fork.

```javascript
var usersFavoriteFruit = decisions({
  'apples': 'you like apples!',
  'oranges': 'high in vitamin C!',
  'bananas': 'your not a monkey are you?',
  'default': 'Cant decide?',
  'unknown': 'huh?'
})('grapes');
```
This will return 'huh?'.


In conclusion: Decisions makes working with logic trees simple and clean.