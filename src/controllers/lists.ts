import { Request, Response } from 'express';

export function get(req : Request, res : Response) {
    const listsData = {};
    res.render('lists', listsData);
}

export function test() {
    return {};
}
