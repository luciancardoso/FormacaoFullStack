const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// definindo o template engine
app.set('view engine', 'ejs');

// definindo os arquivo estaticos
// app.use(express.static(path.join(__dirname, 'views')));

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

// habilita serve para receber dados via post de um (formulário)
app.use(express.urlencoded({ extended:true }))

// rotas
app.get('/', (req, res) =>  {
    res.render('index', {
        title: 'PodCasts - Home'
    });
})

app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'PodCasts - Posts',
        posts: [
            {
                title: 'Criando um servidor com NODE.JS',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam doloremque deserunt quidem pariatur incidunt dolorum fugiat vel. Voluptatem quo perferendis, quod voluptate beatae consequuntur repellendus doloremque hic architecto pariatur!',
                stars: 3
            },
            {
                title: 'Aprendendo a Programar com Flutter',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam doloremque deserunt quidem pariatur incidunt dolorum fugiat vel. Voluptatem quo perferendis, quod voluptate beatae consequuntur repellendus doloremque hic architecto pariatur!',
                stars: 4
            },
            {
                title: 'Aprendendo com React.js',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam doloremque deserunt quidem pariatur incidunt dolorum fugiat vel. Voluptatem quo perferendis, quod voluptate beatae consequuntur repellendus doloremque hic architecto pariatur!',
                stars: 5
            },
        ]
    })
})

app.get('/cadastro-posts', (req, res) => {
    const { c } = req.query;

    res.render('cadastro-posts', {
        title: 'PodCasts - Novo Cadastro',
        cadastrado: c,
    })
})

app.post('/salvar-post', (req, res) => {
    const { titulo, texto } = req.body;

    const data = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(data);

    posts.push({
        titulo,
        texto,
    })

    const postsString = JSON.stringify(posts)
    fs.writeFileSync('./store/posts.json', postsString)

    res.redirect('cadastro-posts?c=1')
    // console.log('ok')
    // res.send('ok, funcionou')
})


// aqui e o que chamamos de 404 not found
app.use('/clientes', (req, res) => { // middleware
    res.send('Página não encontrada')
})

// o processo que tiver executando a minha aplicação vai determinar em qual porta
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`));