import { Model, DataTypes } from '@/deps.ts'
import db from '@/config/db.orm.ts'
import type iUser from '@/mvc/common.interface/iUser.ts'



export default class UserModel extends Model {
   
    static table = 'user';

    static timestamps = true;

    static fields: iUser = {
        pk: {
            primaryKey: true,
            autoIncrement: true,
        },

        id: {
            type: DataTypes.STRING,
        },

        password: {
            type: DataTypes.STRING,
        },

    };

}



db.link([UserModel]);