import { Query } from "..";
import { Categories } from "../../../../types";

const get_all = () => Query<Categories[]>('SELECT * FROM Categories');
const get_one = (id: number) => Query<Categories[]>('SELECT * FROM Categories WHERE id=?', [id]);

export default {
    get_all,
    get_one
}