import { format, getLogger, handlers, setup } from '@/deps.ts'
import config from '@/config/config.ts'



const logOption = {
    logLevel: config.log.level,
    fileLogLevel: config.log.file,
    logDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS'),
    fileLogDate: format(new Date(), 'yyyy-MM-dd'),
};

await setup({

    handlers: {
        console: new handlers.ConsoleHandler(logOption.logLevel, {
            formatter: `${logOption.logDate} [{levelName}] {msg}`, 
        }),

        file: new handlers.RotatingFileHandler(logOption.fileLogLevel, {
            filename: `./@logs/${logOption.fileLogDate}.log`,
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
            level: logOption.logLevel,
            handlers: ['console'],
        },
        file: {
            level: logOption.fileLogLevel,
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