// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server: ', err);
    }

    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos.');
    // });
    db.collection('Todos').find({}).count().then((count) => {
        console.log('Todos');
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos.');
    });
    db.collection('Todos').find({
        _id: new ObjectID('5aae4340ec8abd3c2093ef01')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos.');
    });

    // client.close();
})