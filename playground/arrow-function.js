var user = {
  name: 'Marlena',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi my name is ${this.name}`);
  },

  // use regular funcions in an object
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi my name is ${this.name}`)
  }
};

user.sayHi();

user.sayHiAlt();

user.sayHi(1, 2, 3);

user.sayHiAlt(1, 2, 3);