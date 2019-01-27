** PROJECT IS DEPRECIATED ** This functionality has been moved into the TS-NoDash (https://github.com/BadOPCode/NoDash) library, function Decision and future versions will be there.

# dt-decisions
The better alternative to using case switch.

## Installing
Install from NPM at a console type...
```
npm install --save dt-decisions
```
This will download and install into node_modules.


## How To Use
Simply define a object with all your options and the returned responses.  
Set that in Decisions and it returns a function that takes a parameter that is your selector.

For Node users you will need to make something like this.
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

For browser use you need to copy the decisions.js file into your JS consumption directory on your web server.
than add this to your HTML...
```
<script src="decisions.js"></script>
```

This will globally add a class Decision. Example of how you use DT-Decisions in a browser similar to above...
```javascript
var userChoice = new Decision({
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

###Node JS version
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

###Browser version
```javascript
Decision({
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

Basically the only difference between Node JS and the browser version is that in Node JS
you reference the variable you named the module when you did the require, but when 
your in a web browser you refer to the base class 'Decision'.


You can also store results.
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

##Q&A:
Q: What is the difference between 'default' and 'unknown'

A: Default is when there is no decision or when the decision is false.  For exmaple: usersFavoriteFruit(); -or- usersFavoriteFruit(false);
Uknown is when there is a decision but it does not appear as a specified choice.  If a 'default' isn't specified as a choice than the empty decision will fall back to the 'unknown' choice.  If 'unknown' is also not specified than it will return a error.
