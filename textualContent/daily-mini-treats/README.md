# 1
```javascript
  /** 
   * Javascript functions that doesn't mutate the input 
   * Array.prototype.
                    concat      (or)
                    filter      (or)
                    map         (or) 
                    reduce      (or)
                    reduceRight
    examples for each methods and real-life use cases are in the pipe line
  */
```
# 2
```javascript
/** 
   * Few javascript functions that does mutate the input 
   * Array.prototype.
                    push      	(or)
                    pop      	(or)
                    shift       (or) 
                    unshift     (or)
                    sort		(or)
                    reverse		(or)
                    splice		(or)
                    fill ...	(or)
*/

// examples for each method and 
// real-life use cases are in the pipe line 🔍
// make sure you subscribe 🐦
```
# 4 
```javascript
/** 
	@ES6
    @Input ( [😄, 😆, 😊, 😃], 💥)
	@Output	[😄, 😆, 😊, 😃, 💥]
*/
const immutablePush = (actualArray, newEntry) => {
	return [...actualArray, newEntry]
}
// make sure you subscribe to github/makaravind/ALBTY 🐦🔍
```
# 5
```javascript
/** 
	@ES6
    @Input ( [🐔, 🌑, 🌒, 🌓, 🌔, 🌕 ] )
	@Output	[🌑, 🌒, 🌓, 🌔, 🌕 ]
*/
const immutableUnShift = (actualArray) => {
	const [, ...rest] = actualArray
  	return rest
}

const immutableShift = (actualArray) => actualArray.slice(1)

// make sure you subscribe to github/makaravind/ALBTY 🐦🔍
```
# 7
```javascript
/** 
	@ES6
    @Input ( [ 🕛, 🕧, 🕑, 🕝  ] )
	@Output	[ 🕛, 🕧, 🕑, 🕝 ]
*/
const aBetterToCopy = (actualArray) => [...actualArray]

const yetAnotherWayToCopy = (actualArray) => [].concat(actualArray) // ES5

// make sure you subscribe to github/makaravind/ALBTY 🐦🔍
```

# 8 
```javascript
let human = {
  head: 1,
  hands: 2,
  legs: 2,
};

let handler = {
  get: function(obj, prop) {
    if(obj[prop]) return obj[prop]
    else return new TypeError('This is body part is not present in a human!')
  }
}

let p = new Proxy(human, handler);
console.log(p.hands); // 2
console.log(p.tail); // 'This is body part is not present in a human!'
```

# 9
```javascript
let human = {
  age: 30,
  maxAge: 101,
  head: 1,
  hands: 2,
  legs: 2
};

let handler = {
  set: function(obj, prop, value) {
    if(prop === 'age' && value > obj['maxAge']) {
      throw new RangeError('Human life expectancy cannot have more than ', obj['maxAge'], ' years')
    }

    obj[prop] = value; // the default behaviour
    return true; // indicate success
  }  
}

let p = new Proxy(human, handler);
p.age = 111;
```

# 10
```javascript
// validating the type of the prop in a object
let team = {
  name: 'Avengers',
  members: ['Captain America', 'Iron Man', 'Thor', 'Black Widow', 'Docter Strange', 'Black Panther', 'SpiderMan']
};

let handler = {
  set: function(obj, prop, value) {
    if(typeof value === 'string') {
      throw new TypeError(`It's a team, no space for Thanos!`)
    }
  }
}

let teamProxy = new Proxy(team, handler);
console.log(typeof teamProxy.members); // array
console.log(teamProxy); // ['Captain America', 'Iron Man', 'Thor', 'Black Widow', 'Docter Strange', 'Black Panther', 'SpiderMan']
teamProxy.members = 'Thanos'; // Error: It's a team, no space for Thanos!
```

# 11
```javascript
// Set the prop automatically 
let superTeam = {
  name: 'Avengers',
  members: ['Captain America', 'Iron Man', 'Thor', 'Black Widow', 'Docter Strange', 'Black Panther', 'SpiderMan'],
  isTeamHappy: true,
  villian: undefined,
};

let nickFury = {
  set: function(obj, prop, value) {
    if(prop === 'villian' && value === 'Thanos') {
      obj.isTeamHappy = false;
      obj.members = ['Captain America', 'Iron Man', 'Thor', 'Black Widow']
    }

    obj[prop] = value; // default behaviou
    return true; // success
  }
} 

let team = new Proxy(superTeam, nickFury);
console.log(team.members, team.isTeamHappy); // [..., 'SpiderMan'] true

team.villian = 'Thanos';
console.log(team.members, team.isTeamHappy); // ['Captain America', 'Iron Man', 'Thor','Black Widow'] false
```

# 12 
```javascript
// random getter
let dice = {
  faceValue: null,
};

let handler = {
  get: function(obj, prop) {
    if(prop === 'faceValue') {
      obj.faceValue = Math.floor(Math.random() * 6) + 1; // random number between 1-6
      return obj.faceValue;
    }
    return obj[prop];
  }
};

let diceProxy = new Proxy(dice, handler);
console.log(diceProxy.faceValue);
```


# 13
```javascript
// Formatting the name(First letter capital) before inserting into the object
let Person = {
  name : 'Deadpool'
};

let handler = {
  set : function(obj, prop, value) {
      let formattedValue = [...value.toUpperCase()[0], ...value.slice(1)].join('');
      obj[prop] = formattedValue; // default behaviour
      return true; // success 
  }
};

let personProxy = new Proxy(Person, handler);
console.log( personProxy.name); // Deadpool
personProxy.name = 'cable';
console.log(personProxy.name); // Cable
```

# 14 
```javascript
/*

  What's Immutable in JS ?

  Immutable Already! 😊 
            Number, 
            String, 
            Boolean, 
            Undefined, Null

  Mutable  😌  
            Objects, 
            Arrays, 
            Funtions

*/
```


```javascript
function isBalanced([...string]) { return string.reduce((checker, char) => {
	( char === '(' && checker++ || char === ')' && checker--);
	return checker;
}, 0) === 0 }
````

# 15
```javascript
  
  // javascript examples https://github.com/regexhq
```

  // javascript examples https://github.com/regexhq
# 16
```javascript
  /**
     Difference between exec, search, match 
  */

  var re = /quick\s(brown).+?(jumps)/ig; // global, case-insensitive flags
  
  // ["Quick Brown Fox Jumps"]; returns the match but ignores the capture groups
  var onMatchResult = 'The Quick Brown Fox Jumps Over The Lazy Dog'.match(re); 

  // 4; result the matched index
  var onSearchResult = 'The Quick Brown Fox Jumps Over The Lazy Dog'.search(re); 

  // ["Quick Brown Fox Jumps","Brown","Jumps"]; returns the match as well as the capture groups
  var onExecResult = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog'); 

```

# 17
```javascript

  var str = 'fee fi \nFo fum 😀';

  // flags
  var pattern = /f\w+\s/;
  var flag = '';
  var reNoFlag = new RegExp(pattern, flag);
  var result = str.match(reNoFlag); // ["fee "]

  flag = 'g'
  var reGlobalFlag = new RegExp(pattern, flag);
  result = str.match(reGlobalFlag); // ["fee ", "fi "]

  flag = 'gi'
  var reCaseInsensitiveFlag = new RegExp(pattern, flag);
  result = str.match(reCaseInsensitiveFlag); // ["fee ", "fi "]
  
  flag = 'gim'
  var reMultilineFlag = new RegExp(pattern, flag);
  result = str.match(reMultilineFlag); // ["fee ", "fi ", "Fo "]

  flag = 'u'
  pattern = '';
  var reUnicodeFlag = new RegExp(pattern, flag);
  result = str.match(reUnicodeFlag); // ["fee ", "fi ", "Fo "]
```

# 18
## NPM_SCRIPTS TREAT ⚡️⚡️

###creating custom scripts
Additionally, arbitrary scripts can be executed by running npm run-script <stage>. Pre and post commands with matching names will be run for those as well (e.g. premyscript, myscript, postmyscript). Scripts from dependencies can be run with npm explore <pkg> -- npm run <stage>.

![19_npm](https://user-images.githubusercontent.com/13570866/40869943-12c72f50-6642-11e8-86c6-8c815b94c434.png)

more examples and usecases in next posts 🎅 🎄


# 19
## NPM_SCRIPTS TREAT ⚡️⚡️

**npm supports the "scripts" property of the package.json file, for the following scripts 
There’s quite a few hooks that npm knows about out of the box, and hence will run for you, if they are defined: 😍**

|                command                |                  description                  |
|:-------------------------------------:|:---------------------------------------------:|
| prepublish|publish |postpublish       |  Run BEFORE/AFTER the package is published    |
| preinstall|install |postinstall       | Run BEFORE/AFTER the package is installed     |
| preuninstall|uninstall |postuninstall |  Run BEFORE/AFTER the package is uninstalled. |
| pretest|test |posttest                | Run by the npm test command.                  |
| prestart|start |poststart             | Run by the npm start command.                 |

**For all of these there’s respectively pre and post hook. This comes very handy to manage the life cycle of your application.**

more examples and usecases in next posts 🎅 🎄

# 20
## NPM_SCRIPTS TREAT ⚡️⚡️

npm supports the "scripts" property of the package.json file

All scripts under scripts can be executed with npm **run-script [script name]**. Like this, to run our test command: **npm run-script test**

There are two scripts that npm supports out of the box; **test and start**. When I write supports it’s more like; there’s very convenient, well-known short cuts for them.

- npm run test
- npm test
- npm tst
- npm t

![20_npm](https://user-images.githubusercontent.com/13570866/40869945-29178c6e-6642-11e8-9d8a-078346a8167a.png)


# 21
## NPM_SCRIPTS TREAT ⚡️⚡️

 If you haven’t seen it **&&** is a simple way of running a few commands in a row.
 **"pretest": "rm -r ./logs/ && mkdir logs"**

![21_npm](https://user-images.githubusercontent.com/13570866/40869928-dab48644-6641-11e8-9759-169ee59d2324.png)


# 23
## NPM_SCRIPTS TREAT ⚡️⚡️

**npm supports the "scripts" property of the package.json file. arbitrary scripts can be executed by running npm run-script <cmd>**

> "scripts": {
>     "lint": "jslint '*.js'"
> }

And now everyone has to have it installed globally? No. This is a **development time dependency** for my package. It only needs to be installed if you’re going to **run npm run jslint**.

This is what **devDependencies** 😳 in the package.json is for. You can install and save the dependency like this **npm install jslint --save-dev.**


# 24
## NPM_SCRIPTS TREAT ⚡️⚡️

 ![22_npm](https://user-images.githubusercontent.com/13570866/40869998-503d02dc-6643-11e8-9f1c-e70ad3841853.png)

# 25 -c
## NPM_SCRIPTS TREAT ⚡️⚡️

consider this npm **configuration**

> "name"	 : "myapp",
> "config" : { "port" : "3000" }

This can now be used in your JavaScript code like this:
console.log("Running on port: " + **process.env.npm_package_config_port**) _// Running on port: 3000_

But also in your npm scripts, like this:

> "name"	 : "myapp",
> "config" : { "port" : "3000" },
> "scripts": {
> 	"start"	: "node --harmony app.js $npm_package_config_port"
> }

# 26 -c
## NPM_SCRIPTS TREAT ⚡️⚡️
### Piping result into the next command

> "build-js": "browserify -t reactify app/js/main.js | uglifyjs -mc > static/bundle.js"

1. By using the | you can take the result of one task and pass it on to the next. 
2. The output of the browserify command is a bundled file with all the code from all the required modules into one file (the -t reactify is simply packing up .jsx React stuff).

# 27
## NPM_SCRIPTS TREAT ⚡️⚡️
### Different Ways Of Installing A Package Using npm install
Install a package
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
> npm install <git-host>:<git-user>/<repo-name>
> npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
> npm install <folder>

alias: npm i
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]

### Valid package is:
a) a folder containing a program described by a package.json file
b) a gzipped tarball containing (a)
c) a url that resolves to (b)
d) a <name>@<version> that is published on the registry (see npm-registry) with (c)
e) a <name>@<tag> (see npm-dist-tag) that points to (d)
f) a <name> that has a "latest" tag satisfying (e)
g) a <git remote url> that resolves to (a)
> #27

# 28
## NPM_SCRIPTS TREAT ⚡️⚡️
While installing a npm package you can decide its scope. For example, You might not need any linting packages like EsLint to be installed in production server as it's sole purpose is for 
developers.

Here are the various flags available for the same use case :

-P, --save-prod: Package will appear in your dependencies. This is the default unless -D or -O are present.

-D, --save-dev: Package will appear in your devDependencies.

-O, --save-optional: Package will appear in your optionalDependencies.

--save: Package will apperar in dependencies.

--no-save: Prevents saving to dependencies.

> #28

# 29
# JS-WAT ? ⚡️⚡️
![carbon 1](https://user-images.githubusercontent.com/13570866/41545320-8d33408c-7338-11e8-9a0c-e3efc4cd3f57.png)

Note: This is not a bad part of javascript, Browser is to be blamed! 💯 

> #29

# 30 -c
## NPM_SCRIPTS TREAT ⚡️⚡️
### While setting up your code in production:
With the --production flag (or when the NODE_ENV environment variable is set to production), npm will not install modules listed in devDependencies.

  > npm install --production

NOTE: The --production flag has no particular meaning when adding a dependency to a project.
[source](https://docs.npmjs.com/cli/install)
> #30

# 30 -c
## NPM_SCRIPTS TREAT ⚡️⚡️
### Limitation Of NPM install Algorithm

_note: This is something that a developer might never think of. But it's always good to know the limitations of any system._

consider that A, A`, B, B` are packages and their dependencies.
> A -> B -> A' -> B' -> A -> B -> A' -> B' -> A -> ...

where A is some version of a package, and A' is a different version of the same package. Because B depends on a different version of A than the one that is already in the tree, it must install a separate copy. The same is true of A', which must install B'. Because B' depends on the original version of A, which has been overridden, the cycle falls into infinite regress.

To avoid this situation, npm flat-out refuses to install any name@version that is already present anywhere in the tree of package folder ancestors.

[here is the source](https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm)
> #30

# 31
## Javascript Gym ⚡️⚡️
#### Use Intl.NumberFormat to enable country / currency sensitive formatting.

```javascript
 const toCurrency = (n, curr, LanguageFormat = undefined) =>
   Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
```
  
_Examples_ :
 ```javascript 
  toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
  ```

```javascript 
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
```

#### Check if browser is tab of the page is focused.

```javascript
 const isBrowserTabFocused = () => !document.hidden;
 ```

> 31

# 32
## Javascript Gym ⚡️⚡️
### 1. Scroll to functionality using native _window.scrollTo_ browser API
```javascript
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}; 

/*
  Get distance from top using document.documentElement.scrollTop or document.body.scrollTop. 
  Scroll by a fraction of the distance from the top. Use window.requestAnimationFrame() to animate the scrolling.
*/
```
### 2. Detects wether the website is being opened in a mobile device or a desktop/laptop.
```javascript
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

/*
  navigator.userAgent is the same value that is sent as request header 'user-agent';
  More on HTTP headers, soon!😇
*/
```

> #32

# 33
## Java Jazz⚡️⚡️
#### Java 10 introduced the language feature of Local-Variable Type Inference.
```java
var list = new ArrayList<String>();
```
1. the compiler will infer that list is of type ArrayList<String>. 
2. Using var can help you reduce some of the verbosity, especially with regard to generics and cases where generics are already present in the initialization of the variable or implied in its name.

For an in-depth guide to when to use var, and when not to use it, read Stuart Marks’ style guidelines.
> #33

# 34
## Java Jazz⚡️⚡️
#### Switch expressions (proposal)
If you’ve ever written switch statements that simply set a variable based on what you’re switching over, 
With switch expressions, you can simplify that to:

```java
int val = switch (str) {
  case "foo": break 1;
  case "bar": break 2;
  case "baz": break 3;
  default: break -1;
}
```

break will also take the resulting value of the switch expressions, similar to how return works for method return values.
a shorthand notation, similar to the lambda syntax, is proposed:

```java
int val = switch (str) {
  case "foo" -> 1;
  case "bar" -> 2;
  case "baz" -> 3;
  default -> -1;
}
```

There is already an implementation of switch expressions in the amber repository, so it’s just a matter of time until it will be finalized, fully tested, code reviewed, and approved, before it can be targeted and added to a JDK release. This could be as early as Java 11.
> #34

# 35
## Javascript Gym ⚡️⚡️
## Promise.all()

```javascript 
 Promise.all([
    asyncFunc1(),
    asyncFunc2(),
])
.then(([result1, result2]) => {
    ···
})
.catch(err => {
    // Receives first rejection among the Promises
    ···
});
  ```
  
Promise.all() enables you to be notified once all results are in (a join in Unix process terminology). Its input is an Array of Promises, its output a single Promise that is fulfilled with an Array of the results.

>#35


# 36
## Fun With HTTP Header ⚡️⚡️
#### User-Agent
### Common format for web browsers:
> User-Agent: Mozilla/\<version> (\<system-information>) > \<platform> (\<platform-details>) \<extensions>

#### Major browsers' UA(user-agent) strings
1. Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
2. Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0

_Mozilla/5.0_ is the general token that says the browser is Mozilla compatible, and is common to almost every browser today.

#### But, Crawler and bot UA strings looks different
1. Googlebot/2.1 (+http://www.google.com/bot.html)

So, It is quite straight forward to go ahead and use UA for capturing more information of the user. but, There is a catch here. Genereally it is a bad practice to do UA sniffing as UA can be changed or modified. 

Summary: [UA detection Checklist Zen](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
1. Do not detect user agent strings
2. Use responsive design for your new mobile sites (media queries)
3. If you are using a specific feature, use feature detections to enhance, not block
4. And if finally you are using UA detection, just go with the most simple and generic strings.
Always provide a working fallback whatever the solutions you chose are.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
> #36


# 36
## Fun With HTTP Headers ⚡️⚡️
### Last-Modified / If-Modified-Since
A conditional GET is an HTTP GET request that may return an HTTP 304 response (instead of HTTP 200). An HTTP 304 response indicates that the resource has not been modified since the previous GET. and so the resource is not returned to the client in such a response.

_HTTP Date format:_
\<day-name>, \<day> \<month> \<year> \<hour>:\<minute>:\<second> GMT

This combination of headers is extremlly useful for cache controlling. [Illustation here](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=HTTPHeaders.xml#R5Vvbcts2EP0azbQP1IAEb3r0JU7a2m1m7LbJI0RCEhOKUEgotvL1BUiAIi6yKYnyJfVkHGIBAuDZs4sFsB7Bi%2BXD%2BxKtFjckxfnIA%2BnDCF6OPC%2BOPPabCzaNwIUgaiTzMksbGdgKbrMfWDSU0nWW4krIGhElJKfZShUmpChwQhUZKktyrzabkTxVBCs0x4bgNkG5Kf03S%2BlCSF0AthUfcDZfiKHjQFRMUfJ1XpJ1IcYbeXBW%2FzTVSyT7Eu2rBUrJfUcE343gRUkIbZ6WDxc459iqsF3tqG3nXeKC9nkhinCYTKKZOwlTFMfQET18R%2FlaYPGRAS8mSzcSoOo%2BW%2BaoYKXzBV3mTOiyx2SR5ek12pA1H7yiDAxZOmelkgpNs0nB8xolzOfBSy0QvJCjKc7PWygvSE5KVlWQesCKluQrlkKGMKh%2F2hqpMT6jWZbnnZZCF0xOCnqFllnOGfoPLlNUICEWc4xF0TYOyrN5wWQJQxmzynMTdokjLil%2B6IiEGt5jssS03LAmotaLBCWEzThQGsN9l4FQCBdd9vlCiATt523vW9WzB6F9OxNCQ%2FGG0nGRnnHj4l%2Beo6rKElX9HfRqDTMwys0nodO68JkXxgEvPmT0k1L6LHoxsdxF0oqsy0TMzRdeApVzLF6DjQiniq2bCujgG1jQlbIS54hm31UPYUNcjPCRZOwDWn1GrqakZvaiVddE5YsP6viinzDU%2Bmk%2B2eiHaQptOs1WvEFlmZ9kJwyUcSTTtvRpetySqYWwF7%2FiE%2FBrJ4da5rkq86LgYIJBk2CSBC%2FNMOlBAlWDbb%2F7Ms6bqJRrV6uBKRdqLs%2BNh6WcoVbP4OBFnmHxEU8vb8YS1p9JPdYBCbbp9UOr09eVcojT9582yu0yzSG4X2QU365QbRX3LPjTEOqu4glZcguun3XT7YGc1xs5WQtUOvneODCwjCxQSs93DJKRgeQsKytOdpotcW3c39a4MqnGPo6qIJa4yn6gad2AYyXMiLUOzkfBJY8%2F1pRUDZpuJxzJ8Yx3xRHLWCx7JsSUcC1VTGlZMb%2FjhUvHV3XihqfSiWbiUWTRiRvalDIAvT0zmk0QC1KL%2BYhbT5hzuKYle5rTBvgVKSpsuoMFWvFHhg3Kc5yTeYmWXDO4ZMqtQ0C17uO2YgiTOZl6Ys0BTywhp29RzhABp1xRf07nA6EJ5al8j9TGT4Kk5jKC%2BBmRNB3Gm0ZSDQgj9%2FnWQ99cED1uIuCvP3a61wSV6YAOU9v7pwGOU992fhB7UxieysXCoA1DJKF9k9BxYHGy8QBqmFgI3ax7qxLLhQ8CFgiCPwkPV25Ims0yxm%2FRjI3QaflCupvNZl6S2HSXhtMwOJnuQl13EfCeTXfG%2FM0F8xaX7GtMpbzA9kXu6aC2dzS5HoBTbWdec0QB90XS9VTqTZ7PebvmRnkbG9s8%2BJvaxOyvCS1K9qGhCde1qGIISrs9OH0iH3wKKB0dS0tw1x4%2FdbF0h9hyuLbzDrEaKpCG39b8BuY8zwrsyGmcjeoIJthWb1fFphNGz8LaD4fWacjOe3HB6mEkHAeo62biLuKs2Zii5aquhJBzPF8nWYpG9XVXRXJsNDBn9OHu7iNDwx0zdYBt4NUu6c1M1dlvN8LdtV%2BX1cFA30%2FcBRRvfEgvYIYS9YVric1Fi4025iWiorc7pnSPkQTwNQpc4qTGhpMCuBPWhKkWnkEWMYH3N3cdDJrZmtB0w6I3Co4IIOr%2BzpjLWOC38t3CerYXrk7SRIW8STmf%2FlIfh4NG4d1n8OuxoF2jijptnFwPeEMKMRKnz%2B%2FrAjfciuv%2FOLf85tcLc8vS73PSjVVQtpo417iYc3df98s2%2FCDwJxfNXX7GkKzlSU6qI9j48h95t1mJXuvwyLv6UnGWHPBBdin310fz4XGX%2F%2F8K8zw1NInMMM8amnj6ze5Bp6FmyP2W9y5upGAJo%2BfbvMg%2BOkhmFSsv24MNHdYFWU7X1WuPnP2nj0Vd6856iI21eZpnwHhwdoh2R390doiAtnt5L6erpIcInryS23tXy%2FPwdb31vb13YACVnkKoHUYNljGiMdId9vq%2Bz%2B304SlJYxh0eeeOAYSPMq9u2rnYu9zvCE2hoyWZRO5NXwkdHT0fjedwjjX33JeSIfTHQRzzs%2FCJz9aGWGW6B8agUxtEJ6Krep7mu%2FJ7hiKs32MNPzjHqcNGwc1H%2FOdhtJQAdWkpV51XQstAz4YDB3pJbTUN42N9pLKU7skb09FtcGVQ56DoW89U1QPuZZam%2FP1dObd60uzjYU5rAXpY06Zqi9mOuunOtnAHjN0gVNcxSdljPZv2BpnNKkyPVWGPY9ohA6QBDfx1JTEGnmaYBycx6p7Ce0kLN7OrC%2FImDXzXvuUgAw9cNcQ4jkGDGrQloe8aUctd62s%2BE9n79hbqCWGCt0%2FY%2FiB3tz1Sb57tomtv4HwdOEuqjW%2B7I3T1AKYHdn9XuPxr%2BoX%2F4ZMHarNuXk3WJUfUyUa27MYnL6mOPUpvhnE%2BsIrfZu35uHObFUlzFilurYpptVJPHG23UbtlJ5v6wYf4vW%2FTug3H47HZ1vnEO393x1lC6ar%2Bjiv2b0EqWiCeSHzF3EuzpNe0ac2n622FaT3qpU5hBNrfDbiW5A9o8x%2BT%2FW2AFTtmsMOlmPuxipKSh9aA8psuUN%2FkbA8GQX1X%2BHN7eC0scgJTR60%2FP9LHc7K2f8nYrMHbPxeF7%2F4D)
> #36

# 37
## Fun With HTTP Headers ⚡️⚡️
### Last-Modified / If-Unmodified-Since
1. The **If-Unmodified-Since** header is a request header that’s the inverse of **If-Modified-Since**. 
2. If you make a request and include the If-Unmodified-Since header, the request is processed only if the data hasn’t changed since the specified date. Otherwise, a 412 Precondition Failed status code is returned, and the request isn’t processed.

Common Use Case:
- With POST, it can be done by wikis: editions are rejected if the stored document has been modified since the original has been retrieved.
- There is no need for client-side logic to invalidate the document. Which is generally done by making an another REST API call.

_note: Any preconditionl header should have a server-side support. If you are the backend-dev, You are the guy to enchance your server-side code_


**If-Unmodified-Since** header illustration is similar to **If-Modified-Since**, its just inverse.
[Illustation here](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=HTTPHeaders.xml#R5Vvbcts2EP0azbQP1IAEb3r0JU7a2m1m7LbJI0RCEhOKUEgotvL1BUiAIi6yKYnyJfVkHGIBAuDZs4sFsB7Bi%2BXD%2BxKtFjckxfnIA%2BnDCF6OPC%2BOPPabCzaNwIUgaiTzMksbGdgKbrMfWDSU0nWW4krIGhElJKfZShUmpChwQhUZKktyrzabkTxVBCs0x4bgNkG5Kf03S%2BlCSF0AthUfcDZfiKHjQFRMUfJ1XpJ1IcYbeXBW%2FzTVSyT7Eu2rBUrJfUcE343gRUkIbZ6WDxc459iqsF3tqG3nXeKC9nkhinCYTKKZOwlTFMfQET18R%2FlaYPGRAS8mSzcSoOo%2BW%2BaoYKXzBV3mTOiyx2SR5ek12pA1H7yiDAxZOmelkgpNs0nB8xolzOfBSy0QvJCjKc7PWygvSE5KVlWQesCKluQrlkKGMKh%2F2hqpMT6jWZbnnZZCF0xOCnqFllnOGfoPLlNUICEWc4xF0TYOyrN5wWQJQxmzynMTdokjLil%2B6IiEGt5jssS03LAmotaLBCWEzThQGsN9l4FQCBdd9vlCiATt523vW9WzB6F9OxNCQ%2FGG0nGRnnHj4l%2Beo6rKElX9HfRqDTMwys0nodO68JkXxgEvPmT0k1L6LHoxsdxF0oqsy0TMzRdeApVzLF6DjQiniq2bCujgG1jQlbIS54hm31UPYUNcjPCRZOwDWn1GrqakZvaiVddE5YsP6viinzDU%2Bmk%2B2eiHaQptOs1WvEFlmZ9kJwyUcSTTtvRpetySqYWwF7%2FiE%2FBrJ4da5rkq86LgYIJBk2CSBC%2FNMOlBAlWDbb%2F7Ms6bqJRrV6uBKRdqLs%2BNh6WcoVbP4OBFnmHxEU8vb8YS1p9JPdYBCbbp9UOr09eVcojT9582yu0yzSG4X2QU365QbRX3LPjTEOqu4glZcguun3XT7YGc1xs5WQtUOvneODCwjCxQSs93DJKRgeQsKytOdpotcW3c39a4MqnGPo6qIJa4yn6gad2AYyXMiLUOzkfBJY8%2F1pRUDZpuJxzJ8Yx3xRHLWCx7JsSUcC1VTGlZMb%2FjhUvHV3XihqfSiWbiUWTRiRvalDIAvT0zmk0QC1KL%2BYhbT5hzuKYle5rTBvgVKSpsuoMFWvFHhg3Kc5yTeYmWXDO4ZMqtQ0C17uO2YgiTOZl6Ys0BTywhp29RzhABp1xRf07nA6EJ5al8j9TGT4Kk5jKC%2BBmRNB3Gm0ZSDQgj9%2FnWQ99cED1uIuCvP3a61wSV6YAOU9v7pwGOU992fhB7UxieysXCoA1DJKF9k9BxYHGy8QBqmFgI3ax7qxLLhQ8CFgiCPwkPV25Ims0yxm%2FRjI3QaflCupvNZl6S2HSXhtMwOJnuQl13EfCeTXfG%2FM0F8xaX7GtMpbzA9kXu6aC2dzS5HoBTbWdec0QB90XS9VTqTZ7PebvmRnkbG9s8%2BJvaxOyvCS1K9qGhCde1qGIISrs9OH0iH3wKKB0dS0tw1x4%2FdbF0h9hyuLbzDrEaKpCG39b8BuY8zwrsyGmcjeoIJthWb1fFphNGz8LaD4fWacjOe3HB6mEkHAeo62biLuKs2Zii5aquhJBzPF8nWYpG9XVXRXJsNDBn9OHu7iNDwx0zdYBt4NUu6c1M1dlvN8LdtV%2BX1cFA30%2FcBRRvfEgvYIYS9YVric1Fi4025iWiorc7pnSPkQTwNQpc4qTGhpMCuBPWhKkWnkEWMYH3N3cdDJrZmtB0w6I3Co4IIOr%2BzpjLWOC38t3CerYXrk7SRIW8STmf%2FlIfh4NG4d1n8OuxoF2jijptnFwPeEMKMRKnz%2B%2FrAjfciuv%2FOLf85tcLc8vS73PSjVVQtpo417iYc3df98s2%2FCDwJxfNXX7GkKzlSU6qI9j48h95t1mJXuvwyLv6UnGWHPBBdin310fz4XGX%2F%2F8K8zw1NInMMM8amnj6ze5Bp6FmyP2W9y5upGAJo%2BfbvMg%2BOkhmFSsv24MNHdYFWU7X1WuPnP2nj0Vd6856iI21eZpnwHhwdoh2R390doiAtnt5L6erpIcInryS23tXy%2FPwdb31vb13YACVnkKoHUYNljGiMdId9vq%2Bz%2B304SlJYxh0eeeOAYSPMq9u2rnYu9zvCE2hoyWZRO5NXwkdHT0fjedwjjX33JeSIfTHQRzzs%2FCJz9aGWGW6B8agUxtEJ6Krep7mu%2FJ7hiKs32MNPzjHqcNGwc1H%2FOdhtJQAdWkpV51XQstAz4YDB3pJbTUN42N9pLKU7skb09FtcGVQ56DoW89U1QPuZZam%2FP1dObd60uzjYU5rAXpY06Zqi9mOuunOtnAHjN0gVNcxSdljPZv2BpnNKkyPVWGPY9ohA6QBDfx1JTEGnmaYBycx6p7Ce0kLN7OrC%2FImDXzXvuUgAw9cNcQ4jkGDGrQloe8aUctd62s%2BE9n79hbqCWGCt0%2FY%2FiB3tz1Sb57tomtv4HwdOEuqjW%2B7I3T1AKYHdn9XuPxr%2BoX%2F4ZMHarNuXk3WJUfUyUa27MYnL6mOPUpvhnE%2BsIrfZu35uHObFUlzFilurYpptVJPHG23UbtlJ5v6wYf4vW%2FTug3H47HZ1vnEO393x1lC6ar%2Bjiv2b0EqWiCeSHzF3EuzpNe0ac2n622FaT3qpU5hBNrfDbiW5A9o8x%2BT%2FW2AFTtmsMOlmPuxipKSh9aA8psuUN%2FkbA8GQX1X%2BHN7eC0scgJTR60%2FP9LHc7K2f8nYrMHbPxeF7%2F4D)

# 38
## Fun With HTTP Headers ⚡️⚡️
## Content-disposition /Content-type

 ```javascript 
 var path = require('path');
const http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
  
  var file = __dirname + '/db.json';

  var filename = path.basename(file);
  var mimetype = 'text/json';

  // notice the headers-start
  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);
  // end

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);

}).listen(3010, () => {
  console.log('listening on 3010');
});

  ```

![carbon 2](https://user-images.githubusercontent.com/13570866/42141634-e528057c-7dc7-11e8-8a3c-8b92d9aca495.png)

Adding **Content-disposition** header forces the browser to download the file. In case if it is removed the file will be shown _inline_ i.e the content is shown on the browser window.

note: **Content-disposition** is always used along with  **Content-type**

Here are few possible combinations of these 2 headers: 😎

## 1 🙊
>Content-Type: application/octet-stream
>Content-Disposition: attachment; filename="picture.png"

_Means "I don't know what the hell this is. Please save it as a file, preferably named picture.png"._

## 2 🙈
>Content-Type: image/png
>Content-Disposition: attachment; filename="picture.png"

_Means "This is a PNG image. Please save it as a file, preferably named picture.png"._

## 3 💥
>Content-Type: image/png
>Content-Disposition: inline; filename="picture.png"

_Means "This is a PNG image. Please display it unless you don't know how to display PNG images. Otherwise, or if the user chooses to save it, we recommend the name picture.png for the file you save it as"._

Despite being pretty useful,  **Content-disposition**  has got it's issues. Check this out [Issues](https://www.w3.org/Protocols/rfc2616/rfc2616-sec15.html#sec15.5)

>#38

#39
## NPM_SCRIPTS TREAT ⚡️⚡️
### How To Publish NPM Module
_Assuming that you already have tried and tested your project locally_
1. Create account NPM account
2. Package.json, Make sure you have removed **private=true** field from package.json
3. Make sure **name** field shoud be unique across all npm packages
_note: Uppercase characters are disallowed in new package names_
3. Terminal, run **NPM adduser**
4. Enter your details
5. Check is you are logged in using **npm whoami**
6. For further sanity checks, create a npm-script **prepublish** to lint/ test etc
7. Run **npm publish**
8. If everything is fine, package will published and you will recive a **success** message on your mail
>#39

#40
## Javascript Gym ⚡️⚡️
### shiny new finialized feature of ECMA2018 release.
#### Object Rest/ Spread

 ```javascript 
 const DEFAULTS = {foo: 'a', bar: 'b'};
const userData = {foo: 1};

const data = {...DEFAULTS, ...userData}; // final, {foo: 1, bar: 'b'}
const _data = Object.assign({}, DEFAULTS, userData); // gives same result
  ```

In this snippet, the default object will be overridden by user data. Observe that the **order in which object are spread matters** 

Discussed in detail in the [blog](https://maravindblog.wordpress.com/2018/07/07/yes-its-that-time-of-the-year-es2018/)
>#40

#41
## Javascript Gym ⚡️⚡️
### shiny new finialized feature of ECMA2018 release
#### Promise.prototype.finally

 ```javascript 
 let connection;
db.open()
.then(conn => {
connection = conn;
return connection.select({ name: ‘Jane’ });
})
.then(result => {
// Process result
// Use `connection` to make more queries
})
···
.catch(error => {
// handle errors
})
.finally(() => {
connection.close();
});
  ```
The most common use case is similar to the most common use case of the synchronous finally clause: cleaning up after you are done with a resource. That should always happen, regardless of whether everything went smoothly or there was an error.

Discussed in detail in the [blog](https://maravindblog.wordpress.com/2018/07/07/yes-its-that-time-of-the-year-es2018/)
>#41 


#42
## Javascript Gym ⚡️⚡️
#### You can pass arguments to setTimeout or setInterval's callbacks

 ```javascript 
  function logThings(a, b, c) {
    console.log(a, b, b);
  }

  const afterOneSecond = 1000;
  setTimeout(logThings, afterOneSecond, 'arg1', 'arg2', 'arg3');
  ```
>#42