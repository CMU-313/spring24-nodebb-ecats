'use strict';

const topics = require('../../topics');
const user = require('../../user');

module.exports = function (SocketTopics) {
    async function checkResolvedPrivileges(uid, tid) {
        const topicData = await topics.getTopicFields(tid, ['uid']);
        const isAdmin = await user.isAdministrator(uid);
        const isInstructor = await user.isInstructor(uid);
        const isOwner = uid === topicData.uid;
        const privs = isAdmin || isInstructor || isOwner;
        return privs;
    }

    SocketTopics.markResolved = async function (socket, tid) {
        if (!tid || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        const privs = await checkResolvedPrivileges(socket.uid, tid);
        if (!privs) {
            throw new Error('[[error:no-privileges]]');
        }
        await topics.markResolved(tid);
    };

    SocketTopics.markUnresolved = async function (socket, tid) {
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
