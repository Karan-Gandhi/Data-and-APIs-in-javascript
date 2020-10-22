const express =  require('express');
const datastore = require('nedb');

const app = express();

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: '1mb' }));

const database = new datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end;
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request, response) => {
    console.log("I got a request");

    // console.log(request.body);
    const data = request.body;

    const timestamp = Date.now();
    data.timestamp = timestamp;

    database.insert(data);
    // console.log(database);

    response.json(data);
});