import { config as appEnv } from '@/deps.ts'



appEnv({ export: true });

const config = {

    env: Deno.env.get('DENO_ENV') || 'local',

    port: Number(Deno.env.get('PORT') as unknown as number),
    ip: Deno.env.get('IP'),
    host: Deno.env.get('HOST'),

    db: {
        hostname: Deno.env.get('DB_HOSTNAME'),
        username: Deno.env.get('DB_USER_NAME'), 
        password: Deno.env.get('DB_PASSWORD'),
        port: Number(Deno.env.get('DB_PORT') as unknown as number),
        dbname: Deno.env.get('DB_DBNAME'),
    },

};



export default config;