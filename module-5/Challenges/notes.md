
## Extra feature for carousel
- timed auto trasnstions
- add text to the slides
- show the user on wich slide they are in!


## For of vs For
```js
const names = ['Karl', 'John', 'Steve'];//same stuff, pretty much
const people = [{ name: 'Karl', location: 'UK' }, { name: 'Steve', location: 'US' }];

// old and weird www
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
    console.log(people[i].location);
}

// cooler && cleaner
for (const person of people) {
  console.log(person.name);
  console.log(person.location);
}
```
