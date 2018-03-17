const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5aacc511910d3226f39ed5ef1';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log('Todo by id: ', todo);
// }).catch((e) => console.log(e));

let id = '5aab745f9144501b07bb4f81';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User found by ID: ', user)
}).catch(err => {
    console.log(err);
})