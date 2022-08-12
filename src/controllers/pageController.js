const {createMenuObject} = require('../helpers/createMenuObject')
const home = (req, res) => {
    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner: {
            title:'Todos os animais',
            background:'allanimals.jpg'
        }
    })
}

const dogs = (req, res) => {
    res.render('pages/pages',{
        menu: createMenuObject('dog'),
        banner: {
            title:'Todos os cachorros',
            background:'/banner_dog.jpg'
        }
    })
}

const cats = (req, res) => {
    res.render('pages/pages',{
        menu: createMenuObject('cat'),
        banner: {
            title:'Todos os gatos',
            background:'banner_cat.jpg'
        }
    })
}

const fishes = (req, res) => {
    res.render('pages/pages',{
        menu: createMenuObject('fish'),
        banner: {
            title:'Todos os peixes',
            background:'banner_fish.jpg'
        }
    })
}

module.exports.home = home
module.exports.dogs = dogs
module.exports.cats = cats
module.exports.fishes = fishes
