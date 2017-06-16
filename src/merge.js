const fs          = require('fs')

exports.default = () => {
    let coins = {}
    try {
        fs.readdirSync('./coins').forEach(file => {
            let name = file.split('.json')[0].toUpperCase()
            let text = fs.readFileSync(`./coins/${file}`, 'utf8');
            let json = JSON.parse(text)
            coins = Object.assign({}, coins, {[name]: json})
        })
    }
    catch (e) {
        console.error(e)
    }
    return coins
}
