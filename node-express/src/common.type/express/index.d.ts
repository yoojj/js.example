import express from 'express'
import { User, Result } from '@/common.interface/index.js'



declare global {
    namespace Express {

        interface Request {
            user: User;
        }

        interface Request {
            result: Result;
        }

    }
}