'use strict';

const topics = require('../../topics');
const user = require('../../user');

module.exports = function (SocketTopics) {
    SocketTopics.markResolved = async function (socket, tid) {
        if (!tid || socket.uid <= 0) {
            throw new Error('[[error:invalid-data]]');
        }
        const topicData = await topics.getTopicFields(tid, ['cid', 'uid']);
        const isAdmin = await user.isAdministrator(uid);
        const isMod = await user.isModerator(uid, topicData.cid);
        const isInstructor = await user.isInstructor(uid);
        const isOwner = uid > 0 && uid === topicData.uid;
        if (!isAdmin && !isMod && !isInstructor && !isOwner) {
            throw new Error('[[error:no-privileges]]');
        }
        await topics.markResolved(tid);
    };
};
