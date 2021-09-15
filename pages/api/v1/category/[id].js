import connection from '../../../../config/dbmysql'
export default function handle(req, res) {
    const { id } = req.query
    connection.query(`SELECT c.id, c.name, c.slug FROM categories as c WHERE c.id = ${id}`, (error, results) => {
        if (error) throw error;
        return res.send(results[0]);
    })
}