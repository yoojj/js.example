import dotenv from 'dotenv'
import { setDeepFreeze } from './util.js'



dotenv.config();

interface Env {
    env: string;

    isLocal: boolean;
    isDevelopment: boolean;
    isProduction: boolean;

    app: {
        port: number;
    };

    db: {
        username: string;
        password: string;
        database: string;
        host: string;
        port: number;
        dialect: string;
    };
}

export const env: Env = setDeepFreeze({

    env: process.env.NODE_ENV || 'local',

    isLocal: process.env.NODE_ENV === 'local',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',

    app: {
        port: Number(process.env.PORT),
    },

    db: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: process.env.DB_DIALECT,
    },

});