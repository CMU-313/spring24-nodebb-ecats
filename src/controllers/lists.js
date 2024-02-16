"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.get = void 0;
function get(req, res) {
    const listsData = {};
    res.render('lists', listsData);
}
exports.get = get;
function test() {
    return {};
}
exports.test = test;
