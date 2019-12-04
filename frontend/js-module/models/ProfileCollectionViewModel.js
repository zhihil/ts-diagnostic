define([
    'dojo/_base/declare',
    'dojo/Stateful',
    'dojo/request',
    'models/ProfileViewModel'
], (declare, Stateful, request, ProfileViewModel) => {
    return declare([Stateful], {
        userProfiles: null,
        usersUrl: 'http://localhost:9001/users',

        isFetching: false,

        constructor() {
            this.getUsersData();
        },

        getUsersData() {
            this.isFetching = true;
            request(this.usersUrl).then(
                this.getUsersSuccess,
                this.getUsersFailed
            );
        },

        getUsersSuccess(data) {
            const parsedData = JSON.parse(data);

            this.userProfiles = {};
            for (const id in parsedData) {
                this.userProfiles[id] = new ProfileViewModel(parsedData[id]); 
            }

            this.isFetching = false;
        },

        getUsersFailed(_err) {
            this.isFetching = false;
        }
    });
});
