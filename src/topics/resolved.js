'use strict';

const assert = require('assert');

module.exports = function (Topics) {
    // Topics.markResolved(tid: object | number): void
    Topics.markResolved = async function (tid) {
        assert(typeof tid === 'object' || typeof tid === 'number');
        const exists = await Topics.exists(tid);
        if (!exists) {
            throw new Error('[[error:no-topic]]');
        }
        await Topics.setTopicField(tid, 'resolved', 1);
    };

    // Topics.markUnesolved(tid: object | number): void
    Topics.markUnresolved = async function (tid) {
        assert(typeof tid === 'object' || typeof tid === 'number');
        const exists = await Topics.exists(tid);
        if (!exists) {
            throw new Error('[[error:no-topic]]');
        }
        await Topics.setTopicField(tid, 'resolved', 0);
    };
};
