# for..of loop in ECMA6

In ES6, we have a **for..of** loop which loops over the iterable objects such as String, Arrays, Collections(Map, Set) etc.

Before we talk about **for..of** loop, let's remember our companion from ECMA5 days i.e. **for..in** loop. **for..in** loop is used to loop over the indexes
in an array/keys in case of objects.

```Javascript
var fruits = ["Banana", "Orange", "Kiwi", "Apple"];
for (var index in fruits) {
  console.log(index);
}
```

Output: ```0
           1
           2
           3```

But, **for..of** loop is to loop over values in an array or any iterable
object for that matter.

Below is the basic syntax of a **for..of** loop:

```Javascript
for (let value of iterable)
```

Let's see **for..of** loop in action with a few iterables:

**Array**

```Javascript
let fruits = ["Banana", "Orange", "Kiwi", "Apple"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

Output : ```Banana
                                         Orange
                                         Kiwi
                                         Apple```
                                         
**String**

```Javascript
let city = "Berlin";
for (let char of city) {
  console.log(char)
}
```
Output : ```B
            e
            r
            l
            i
            n```

**Map**

```Javascript
let map = new Map();
map.set(0, 'Zero');
map.set(1, 'One');
for (let element of map) {
  console.log(element);
}
```
Output : ```[ 0, 'Zero' ]
            [ 1, 'One' ]```

In case you want to get the value in the key/value pair in a **Map**, you can do following:

```Javascript
for (let [key, value] of map) {
  console.log(value);
}
```

Output: ```Zero
           One```

**arguments**
In case you want to loop over the arguments of a function, you can do the following:

```Javascript
function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3, 4)
```

Output: ```1
           2
           3
           4```
           
> One thing which is extremely important to note here is that the value you want to loop over should be an 
iterable object. 


