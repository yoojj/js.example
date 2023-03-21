import { config as appEnv } from '@/deps.ts'
import { setDeepFreeze } from '@/common/util.ts'



appEnv({ export: true });

interface Env {
    env: string;
    app: {
        port: number;
        ip: string;
        host: string;
    };
    log: object;
    db: object;
};

export const env: Readonly<Env> = setDeepFreeze({

    env: Deno.env.get('DENO_ENV') || 'local',

    app: {
        port: Number(Deno.env.get('PORT') as unknown as number),
        ip: Deno.env.get('IP'),
        host: Deno.env.get('HOST'),
    },
    
    log: {
        level: Deno.env.get('LOG_LEVEL'),
        file: Deno.env.get('LOG_FILE'),
    },
      
    db: {
        hostname: Deno.env.get('DB_HOSTNAME'),
        username: Deno.env.get('DB_USER_NAME'), 
        password: Deno.env.get('DB_PASSWORD'),
        port: Number(Deno.env.get('DB_PORT') as unknown as number),
        dbname: Deno.env.get('DB_DBNAME'),
    },

});