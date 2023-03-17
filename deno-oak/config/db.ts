import { Client, configLogger } from '@/deps.ts'
import config from '@/config/config.ts'



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

} catch(e) {
    console.log(e);
    Deno.exit(1);
}



export default db;