import { Request, Response } from 'express';
import { pool } from '../config/config';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM user ORDER BY id ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM user WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
    const { name } = req.body;
    const response = await pool.query('INSERT INTO user (name) VALUES ($1, $2)', [name]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name }
        }
    })
};

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    const response = await pool.query('UPDATE user SET name = $1 WHERE id = $3', [
        name,
        id
    ]);
    res.json('User Updated Successfully');
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM user where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};