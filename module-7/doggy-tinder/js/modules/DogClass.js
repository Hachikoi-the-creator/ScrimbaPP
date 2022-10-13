class Dog {
  constructor(data) {
    // Object.assign(this, data);
    this.name = data.name;
    this.avatar = data.avatar;
    this.age = data.age;
    this.bio = data.bio;
    this.hasBeenSwiped = data.hasBeenSwiped;
    this.hasBeenLiked = data.hasBeenLiked;
  }

  bark() {
    console.log(`${this.name} is barking at you`);
  }
}

export { Dog };
