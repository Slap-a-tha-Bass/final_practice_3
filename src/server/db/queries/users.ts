import { Query } from "..";
import { Users } from "../../../../types";

const get_all = () => Query('SELECT * FROM Users');

const find = (column: string, value: string ) => Query('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const insert = (newUser: Users) => Query('INSERT INTO Users SET ?', [newUser]);

export default {
    find,
    insert,
    get_all
}

