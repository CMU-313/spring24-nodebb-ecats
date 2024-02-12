'use strict';
import {Request, Response} from "express"

const listsController = module.exports;

listsController.get = async function (req : Request, res : Response) {
    const listsData = {};
    res.render('lists', listsData);
};
