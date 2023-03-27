import  winston  from 'winston'
import { StringMap } from '../common.type/object.type.js'



const colors: StringMap = {
    error: 'magenta',
    warn: 'yellow',
    info: 'green',
}

winston.addColors(colors);

const format = winston.format;

const transports = [
    new winston.transports.Console(),

    new winston.transports.File({
        filename: '@logs/error.log',
        level: 'error',
        //handleExceptions: true,
    }),

    new winston.transports.File({ 
        filename: '@logs/all.log',
        format: format.combine(
            format.timestamp(),
            format.json()
        )
    }),
]

const logOption = {
    level: 'info',
    format: winston.format.json(),
    transports,
    //exitOnError: false,
};



export const log  = winston.createLogger(logOption);