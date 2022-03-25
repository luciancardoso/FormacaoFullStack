const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// definindo o template engine
app.set('view engine', 'ejs');

// definindo os arquivos estáticos
// app.use(express.static(path.join(__dirname, 'views')));

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


// Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'BlogDEV - Home',
        posts: [
            {
                title: "Front End ou Back End",
                text: "Front End ou Back End developer são termos para diferenciar onde uma pessoa que programa acaba se especializando. Se você está entrando no mundo do desenvolvimento muito provavelmente classifica todo mundo como programador e programadora, mas os sistemas se tornaram tão complexos que precisamos que cada um seja responsável por partes específicas de uma aplicação.",
            },
            {
                title: "O que é Front End?",
                text: "Podemos classificar como a parte visual de um site, aquilo que conseguimos interagir. Quem trabalha com Front End é responsável por desenvolver por meio de código uma interface gráfica, normalmente com as tecnologias base da Web (HTML, CSS e JavaScript). Algumas pessoas podem confundir um pouco esse trabalho com o que um designer faz (no passado existia uma entidade chamda Webmaster que fazia tudo isso e mais um pouco), mas a diferença aqui é que o designer vai utilizar alguma ferramenta visual para desenhar a interface, do Photoshop ao Sketch, e quem faz front-end estará mais próxima do código em si, que irá rodar em um navegador Web como Chrome, Firefox ou Safari. (Confira também nossa webserie sobre as Fronteiras do Front-end)",
            },
            {
                title: "O que é Back End?",
                text: "Back End, como o próprio nome sugere, vem da ideia do que tem por trás de uma aplicação. Pode ficar meio abstrato em um primeiro momento, mas pense que para conseguir usar o Facebook no dia a dia, os dados do seu perfil, amigos e publicações precisam estar salvos em algum lugar, sendo esse lugar um banco de dados e processados a partir de lá. Não basta apenas o front-end em HTML e CSS! O Back End trabalha em boa partes dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias em um ambiente onde o usuário final não tenha acesso e possa manipular algo.",
            }
        ]
    })
})

app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'BlogDEV - Posts',
        posts: [
            {
                title: "Minha experiência para aprender Angular",
                text: "Vou colocar uma definição retirada da Wikipedia: Um aplicativo de página única (em inglês “single-page application”, ou SPA) é uma aplicação web ou site que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop. Em um SPA, todo o código necessário – HTML, JavaScript, e CSS – ou é obtido com um único carregamento de página, ou os recursos apropriados são carregados dinamicamente e adicionados à página conforme necessário, geralmente em resposta a ações do usuário. A página não é recarregada em qualquer momento do processo, tampouco ocorre a transferência de controle para outra página, embora a URL no navegador ou a API de história do HTML5 possam ser usadas para fornecer a percepção e navegabilidade de páginas separadas ao aplicativo. Interação com aplicativos de página única muitas vezes envolve comunicação dinâmica com o servidor web por trás dos bastidores. Em outras palavras, aplicativo de página única (SPA) é uma página que, ao invés de ser carregada completamente, somente parte do conteúdo é que muda. ",
                stars: 4
            },
            {
                title: "Desenvolvimento front-end: como começar e principais tecnologias",
                text: "Aqui discutiremos com mais afinco o desenvolvimento front-end. Ele é muito  importante, pois trata diretamente com a opinião do cliente final em seu primeiro contato com o sistema. Mas o que podemos definir como front-end? Front-end consiste em tudo que realiza uma interação direta com o usuário, ou seja, toda a programação da interface gráfica de um sistema. O termo Front-end pode ser aplicado tanto para o desenvolvimento mobile, quanto para o desenvolvimento Web, mas neste artigo vamos focar no Web. Em um site de compras, por exemplo, se eu quero adquirir uma televisão, o front-end é responsável por me guiar através de menus e opções que vão me levar até o produto. Não vou encontrar uma televisão procurando utensílios domésticos, concorda comigo? A interface gráfica precisa ser clara, intuitiva e simples. Como se fosse uma trilha de pão em uma grande floresta. Porém, simples não significa que o sistema seja menos complexo, mas sim, possui rotas bem definidas que o usuário consiga se guiar sem precisar pedir ajuda a cada passo dado. Vamos em frente para você entender melhor o assunto.",
                stars: 5
            },
            {
                title: "Operator Pattern em aplicações Kubernetes",
                text: "Custom Resources Definition (CRD), ou em português “definição customizada de recurso”, é uma forma de estender a API do Kubernetes. Por padrão o K8S já possui diversos recursos: service, pod, deployment, etc. Caso você queira criar o seu próprio recurso, é necessário criar uma definição customizada de recurso (CRD) que declare os campos que o seu recurso terá. Com isso, você pode utilizar a API do K8S para criar, monitorar e atualizar o seu recurso.",
                stars: 3
            },
            {
                title: "Spam via botnet: conheça como funciona e mantenha sua operação segura",
                text: "Hoje existem muitos filtros anti-spam: filtros de e-mails, filtros nos navegadores, mensageiros (Facebook, Instagram, etc) e outros. Caso você use o mesmo link para realizar um ataque com engenharia social (phishing) de forma massiva, a inteligência de detecção de padrões destas empresas determina que aquele link ou site é de alto risco. Por este motivo, assistimos campanhas de phishing serem bloqueadas em apenas algumas horas, ou praticamente nem começarem. Para um completo sucesso, toda prova de conceito deste teste foi criada em cima de uma botnet (computadores pessoais, porque nuvem ou servidores hackeados aumentam o score de risco). Pensando nestes padrões foi desenvolvido alguns métodos randômicos. Vamos ver alguns exemplos do framework a seguir.",
                stars: 5
            },
            {
                title: "Diversidade na Zup: aprendizados e conquistas da área",
                text: "Empresas de tecnologia precisam ser mais diversas para construírem soluções com diferentes pontos de vista e que, de fato, transformem a sociedade. Mas o processo de aumentar a diversidade em uma empresa é marcado por diversos desafios e aprendizados. Por isso, hoje vamos compartilhar o processo da área de Diversidade na Zup, nossos aprendizados e nossas conquistas! Afinal, um dos nossos pilares de cultura não é “Respeito e Inclusão” a toa! 😉",
            },
        ]
    })
})

app.get('/cadastro-post', (req, res) => {
    const { c } = req.query

    res.render('cadastro-post', {
        title: 'BlogDEV - Cadastrar Post',
        cadastrado: c
    })
})

app.post('/salvar-post', (req, res) => {
    const { titulo, nome, texto } = req.body

    const dados = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(dados)

    posts.push({
        titulo,
        nome,
        texto,
    })

    const postsString = JSON.stringify(posts)
    fs.writeFileSync('./store/posts.json', postsString)

    res.redirect('/cadastro-post?c=1')
})

// 404 gerar erro de página não encontrada
app.use('/contato', (req, res) => {
    res.send('Página não encontrado')
})

const port = process.env.PORT || 8080
app.listen(port, () => `Listening at the door ${port}`);