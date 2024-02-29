import * as db from '../helpers/database';

export const getById = async(id: any) => {
    let query = "select * from articles where ID=?";
    let values = [id];
    let data = await db.run_query(query, values);
    return data;
}

export const getAll = async() => {
    let query = "select * from articles";
    let data = await db.run_query(query, null);
    return data;
}

export const add = async(article: any) => {

}