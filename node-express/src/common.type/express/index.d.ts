import express from 'express'
import { User } from 'src/common.interface/User'
import { Result } from 'src/common.interface/Result'



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