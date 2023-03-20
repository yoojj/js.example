import { Database, MySQLConnector } from '@/deps.ts'
import config from '@/config/config.ts'



const connector = await new MySQLConnector({
    database: config.db.dbname,
    host: config.db.hostname,
    username: config.db.username,
    password: config.db.password,
    port: config.db.port,
});

const db = new Database(connector);



export default db;