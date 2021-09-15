import connection from '../../../../config/dbmysql'
export default function handle(req, res) {
    const { id } = req.query
    connection.query(`SELECT categories.name as cname, categories.slug as cslug, products.* FROM categories, products 
    WHERE categories.id = products.category_id AND products.id = ${id}`, (error, results) => {
        if (error) throw error;
        return res.send(results[0]);
    })
}