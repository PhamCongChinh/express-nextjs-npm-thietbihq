import connection from '../../../config/dbmysql'
export default function handle(req, res) {
    connection.query('SELECT p.name, p.slug, p.image, p.id FROM products as p ORDER BY p.id DESC', function (error, results) {
        if (error) throw error;
        return res.send(results)
    })
}