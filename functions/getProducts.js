const products = require('../products')


function getProducts (req, res, product_list) {
    let answer = ''
    if (!req.params.id && !req.query.price) {
        return res.status(200).send(products)
    }
    if (req.params.id) {
        let product = product_list.find(prod => {
            return prod.id === parseInt(req.params.id)
        })
        if (product) {
            answer = product
        }
    }
    if (req.query.price) {
        console.log('looking for price')
        if (answer && answer.price)  {
            console.log('had ID', answer.id)
            if (parseInt(answer.price) >= parseInt(req.query.price)) {
                res.status(200).send(answer)
            } else {
                res.status(500).send(`Item in list, but less then price ${answer.id}, ${answer.price}`)

            }
        } else {
            console.log('no id')
            answer = products.filter(prod => {
                return prod.price >= parseInt(req.query.price)
            })
        }
    }
    if (answer) {
        res.status(200).send(answer)
    } else {
        res.status(500).send('Item not in list')
    }
}




module.exports = getProducts;