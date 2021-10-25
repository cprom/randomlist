const router = require('express').Router();
let Item = require('../../models/item.model');

//POST - Add new item to list
router.post('/item', (request, response) => {
    Item({ name: request.body.item}).save()
    .then((item) => { response.status(200).json('Item Added Successfully!'); })
    .catch((err) => {response.status(400).json('Unable to add item: ' + err); })
})

//GET - Fetch entire list
router.get('/', (request, response) => {
    Item.find()
    .then((list) => { response.status(200).json(list); })
    .catch((err) => { response.status(400).json('Unable to fetch list: ' + err); })
})

module.exports = router;