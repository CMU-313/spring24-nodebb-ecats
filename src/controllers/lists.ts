import { Request, Response } from 'express';

export default function get(req : Request, res : Response) {
    const listsData = {};
    res.render('lists', listsData);
}
