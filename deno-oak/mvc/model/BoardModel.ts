import { Model, DataTypes } from '@/deps.ts'
import db from '@/config/db.orm.ts'
import type iBoard from '@/mvc/common.interface/iBoard.ts'



export default class BoardModel extends Model {
   
    static table = 'board';

    static timestamps = true;

    static fields: iBoard = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING,
            length: 100,
        },

        content: {
            type: DataTypes.STRING,
        },
    };

}



db.link([BoardModel]);