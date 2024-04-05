const userPrototype = {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const user1 = {
    firstName: 'Andrii',
    lastName: 'Kotsiuba',
    __proto__: userPrototype,
};

const user2 = {
    firstName: 'Alex',
    lastName: '007'
};

user2.__proto__ = userPrototype;

console.log(user1.getFullName());
console.log(user2.getFullName());