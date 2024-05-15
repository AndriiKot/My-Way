const userPrototype = {
  type: "person",
};

const user1 = {
  firstName: "Andrii",
  lastName: "Kotsiuba",
};

const getFullName = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
}

const user2 = {
  firstName: "Alex",
  lastName: "007",
};

Reflect.setPrototypeOf(userPrototype, getFullName);
Reflect.setPrototypeOf(user2, userPrototype);
Reflect.setPrototypeOf(user1, userPrototype);

console.log(user1.getFullName());
console.log(user2.getFullName());
