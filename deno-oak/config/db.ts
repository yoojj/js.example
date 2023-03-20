import { Client, configLogger, Database, MySQLConnector } from '@/deps.ts'
import config from '@/config/config.ts'
import { log } from '@/middleware/logger.ts'



await configLogger({ enable: false });

const db = await new Client();

try {

    db.connect({
        hostname: config.db.hostname,
        username: config.db.username,
        password: config.db.password,
        port: config.db.port,
        db: config.db.dbname,
    });

} catch(error) {
    log.error(error);
    Deno.exit(1);
}



export default db;