"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(req, res) {
    const listsData = {};
    res.render('lists', listsData);
}
exports.default = get;
