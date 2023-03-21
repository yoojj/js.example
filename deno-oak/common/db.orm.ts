import { Database, MySQLConnector } from '@/deps.ts'
import { env } from '@/common/config.ts'
import { log } from '@/middleware/logger.ts'



let connector: MySQLConnector;

try {

    log.info('--- db.orm connect ---');
    connector = await new MySQLConnector({
        database: env.db.dbname,
        host: env.db.hostname,
        username: env.db.username,
        password: env.db.password,
        port: env.db.port,
    });

} catch(error) {
    log.error(error);
    Deno.exit(1);
}



export const db = new Database(connector);