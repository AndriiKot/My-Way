"use strict";

const person = {
    name: "Ivan",
    date: new Date(123),
    friends: ["John"]
}

const clonePersonApi = structuredClone(person)

