'use strict';
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift('Lux');
console.log(users);

users.splice(3, 0, 'Jay', 'Kiwi');
console.log(users);

let userToDelete;
let an;
userToDelete = 'Ajax';
an = users.indexOf(userToDelete);
console.log('Position of Ajax: ', an);
users.splice(an, 1);
console.log(users);

const userToInsert = 'Kong';
const insertBefore = 'Jay';
an = users.indexOf(userToDelete);