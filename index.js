const app = require('express')();

const server = require('http').createServer(app)
const cors = require('cors')



app.use(cors())

const PORT = process.env.PORT || 3500

const fs = require('fs')

app.get("/json/:name", (req, res) => {
    const heroName = req.params.name;
    const rawdata = fs.readFileSync('heroes.json');
    const all = JSON.parse(rawdata);
    const foundHeroes = all.filter(hero=>hero.name.includes(heroName))

    res.json(foundHeroes)

})

app.listen(PORT, () => {
    console.log('server is listening... ')
})