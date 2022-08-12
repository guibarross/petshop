const express = require('express')
const dotenv =  require('dotenv') //variavel de ambiente
const mustache = require('mustache-express') // tamplate de visualização html
const path = require('path') //nos ajuda a encontrar os arquivos de visualização
//criando a variavel server que vai armanezar o express
const server = express()

//importanto mainRoutes que será o arquivo da nossa rota
const mainRoutes = require('./routes/index')

dotenv.config()

//configurando mustache
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())
server.use(express.static(path.join(__dirname, '../public')))
// usando arota importada
server.use(mainRoutes)
//escutando a porta que colocamos no .env
server.listen(process.env.PORT)






