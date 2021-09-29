import { Query } from "..";

const get_all = () => Query('SELECT * FROM Categories');
const get_one = (id: number) => Query('SELECT * FROM Categories WHERE id=?', [id]);

export default {
    get_all,
    get_one
}