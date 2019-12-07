define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/Stateful',
    'dojo/request',
    'models/ProfileViewModel'
], (declare, lang, Stateful, request, ProfileViewModel) => {
    return declare([Stateful], {
        userProfiles: null,
        selectedProfileId: null,
        usersUrl: 'http://localhost:9001/users',

        isFetching: false,

        constructor() { },

        refreshData() { 
            return this.getUsersData();
        },

        getUsersData() {
            this.set('isFetching', true);
            return request(this.usersUrl).then(
                lang.hitch(this, this.getUsersSuccess),
                lang.hitch(this, this.getUsersFailed)
            );
        },

        getUsersSuccess(data) {
            const parsedData = JSON.parse(data);

            this.set('userProfiles', {});
            for (const id in parsedData) {
                this.userProfiles[id] = new ProfileViewModel(parsedData[id]); 
            }

            const keys = Object.keys(parsedData);
            if (keys.length > 0) {
                this.set('selectedProfileId', keys[0]);
            }

            this.set('isFetching', false);
        },

        getUsersFailed(_err) {
            this.set('isFetching', false);
        },

        changeSelectedUser(targetId) {
            const recordIds = Object.keys(this.userProfiles);
            const filteredRecords = recordIds.filter(id => this.userProfiles[id].ProfileId === targetId);

            if (filteredRecords.length === 0) {
                throw Error("Attempted to change to a non-existent user");
            } else if (filteredRecords.length > 1) {
                throw Error("Unknown error - malformed data has duplicate users")
            }

            const selectedId = filteredRecords[0];
            this.set('selectedProfileId', recordIds[selectedId]);
        }
    });
});
