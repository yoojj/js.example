import { Client, configLogger } from '@/deps.ts'
import { env } from '@/common/config.ts'
import { log } from '@/middleware/logger.ts'



await configLogger({ enable: false });

export const db = await new Client();

try {

    log.info('--- db connect ---');
    db.connect({
        hostname: env.db.hostname,
        username: env.db.username,
        password: env.db.password,
        port: env.db.port,
        db: env.db.dbname,
    });

} catch(error) {
    log.error(error);
    Deno.exit(1);
}