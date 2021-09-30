import { Query } from "..";
import { Users } from "../../../../types";

const find = (column: string, value: string ) => Query<Users[]>('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const insert = (newUser: Users) => Query('INSERT INTO Users SET ?', [newUser]);

export default {
    find,
    insert
}

