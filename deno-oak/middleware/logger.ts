import { getLogger, handlers, setup } from '@/deps.ts'
import config from '@/config/config.ts'



const LOG_LEVEL: string = config.log.level;
const LOG_FILE: string = config.log.file;

await setup({

    handlers: {
        console: new handlers.ConsoleHandler(LOG_LEVEL, {
            formatter: '{datetime} {levelName} {msg}', 
        }),

        file: new handlers.RotatingFileHandler(LOG_FILE, {
            filename: `@/@log/${new Date}.log`,
            maxBytes: 15,
            maxBackupCount: 5,
            formatter: f => JSON.stringify({
                region: f.loggerName, 
                ts: f.datetime, 
                level: f.levelName, 
                data: f.msg
            }),
        }),
    },

    loggers: {
        default: {
            level: LOG_LEVEL,
            handlers: ['console'],
        },
        file: {
            level: LOG_FILE,
            handlers: ['file'],
        },
    },
});



const log = getLogger();
const fileLog = getLogger('file');

export {
    log,
    fileLog,
} 