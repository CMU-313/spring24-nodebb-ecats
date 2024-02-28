'use strict';

module.exports = function (Topics) {
    Topics.markResolved = async function (tid) {
        const exists = await Topics.exists(tid);
        if (!exists) {
            throw new Error('[[error:no-topic]]');
        }
        await Topics.setTopicField(tid, 'resolved', 1);
    };
};
