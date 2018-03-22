const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({query})

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findOneAndRemove({_id: '5ab35dadab62a56b4db74548'}).then(doc => {
    console.log(doc);
});

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5ab35dadab62a56b4db74548').then(doc => {
    console.log(doc);
});