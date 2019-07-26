module.exports ={
    getItems:  (req,res) => {
        const db = req.app.get('db')
        // let allItems = await db.get_all_items()
        db.get_all_items().then(allItems => {
            res.status(200).send(allItems)
        }).catch( err => {
            res.sendStatus(500)
        })
    },
    createItem: async (req,res) =>{
        const db = req.app.get('db')
        let createdItem = await db.create_item(req.body).catch(err =>{
            res.sendStatus(500)
        })
        res.status(201).send(createdItem)
    }

}