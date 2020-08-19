import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Fabricio',
        'Cleiton',
        'Robson',
        'Daniel',
        'Marcos'
    ]);
});

app.listen(3333);