import connection from '../../../../config/dbmysql'
export default function handle(req, res) {
    const { id } = req.query
    connection.query(`SELECT p.id, p.name, p.slug, p.image FROM products as p WHERE p.category_id = ${id}`, (error, results) => {
        if (error) throw error;
        return res.send(results);
    })
}