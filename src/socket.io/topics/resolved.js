'use strict';

const assert = require('assert');
const topics = require('../../topics');
const user = require('../../user');

module.exports = function (SocketTopics) {
    // checkResolvedPrivileges(uid: number, tid: object | number): boolean
    async function checkResolvedPrivileges(uid, tid) {
        assert(typeof uid === 'number');
        assert(typeof tid === 'object' || typeof tid === 'number');
        const topicData = await topics.getTopicFields(tid, ['uid']);
        const isAdmin = await user.isAdministrator(uid);
        const isInstructor = await user.isInstructor(uid);
        const isOwner = uid === topicData.uid;
        const privs = isAdmin || isInstructor || isOwner;
        assert(typeof privs === 'boolean');
        return privs;
    }

    // type Socket = { uid : number }
    // SocketTopics.markResolved(socket: Socket, tid: object | number): void
    SocketTopics.markResolved = async function (socket, tid) {
        assert(typeof socket.uid === 'number');
        assert(typeof tid === 'object' || typeof tid === 'number');
        if (!tid || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        const privs = await checkResolvedPrivileges(socket.uid, tid);
        if (!privs) {
            throw new Error('[[error:no-privileges]]');
        }
        await topics.markResolved(tid);
    };

    // SocketTopics.markResolved(socket: Socket, tid: object | number): void
    SocketTopics.markUnresolved = async function (socket, tid) {
        assert(typeof socket.uid === 'number');
        assert(typeof tid === 'object' || typeof tid === 'number');
        if (!tid || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        const privs = await checkResolvedPrivileges(socket.uid, tid);
        if (!privs) {
            throw new Error('[[error:no-privileges]]');
        }
        await topics.markUnresolved(tid);
    };
};
