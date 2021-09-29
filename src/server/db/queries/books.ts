import { Query } from "..";
import { Books } from "../../../../types";

const get_all = () => Query('SELECT * FROM Books');
const get_one = (id: number) => Query('SELECT * FROM Books WHERE id=?', [id]);
const post_one = (newBook: Books, id: number) => Query('INSERT INTO Books SET ?', [newBook, id])
const edit_one = (editBook: Books, id: number) => Query('UPDATE Books SET ? WHERE id=?', [editBook, id]);
const delete_one = (id: number) => Query('DELETE FROM Books WHERE id=?', [id]);

export default {
    get_all,
    get_one,
    post_one,
    edit_one,
    delete_one
}