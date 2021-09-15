import connection from '../../../config/dbmysql'
export default function handle(req, res) {
    connection.query('SELECT c.id, c.name, c.slug FROM categories as c ORDER BY c.id DESC', (error, results) => {
        if (error) throw error;
        return res.send(results);
    })
}
