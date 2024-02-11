'use strict';

const listsController = module.exports;

listsController.get = async function (req, res) {
    const listsData = {};
    res.render('lists', listsData);
};
