define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/Stateful',
    'dojo/request',
    'models/ProfileViewModel'
], (
    declare: Function, 
    lang: any, 
    Stateful: object, 
    request: Function, 
    ProfileViewModel: IConstructableProfileViewModel
) => {
    class ProfileCollectionViewModel implements IProfileCollectionViewModel {
        /* Mixin implementation methods */  
        set: (prop: string, value: any) => void;
        get: (prop: string) => any;
        watch: <T>(prop: string, handler: WatchHandler<T>) => void;

        readonly userProfiles: Map<IProfileViewModel> = null;
        selectedProfileId: string = null;
        readonly usersUrl: string = 'http://localhost:9001/users';

        isFetching: false;

        constructor() { }

        refreshData() { 
            return this.getUsersData();
        }

        getUsersData() {
            this.set('isFetching', true);
            return request(this.usersUrl).then(
                lang.hitch(this, this.getUsersSuccess),
                lang.hitch(this, this.getUsersFailed)
            );
        }

        getUsersSuccess(data: string) {
            const parsedData: { [id: string]: IProfileModel } = JSON.parse(data);

            this.set('userProfiles', {});
            for (const id in parsedData) {
                this.userProfiles[id] = new ProfileViewModel(parsedData[id]); 
            }

            const keys = Object.keys(parsedData);
            if (keys.length > 0) {
                this.set('selectedProfileId', keys[0]);
            }

            this.set('isFetching', false);
        }

        getUsersFailed() {
            this.set('isFetching', false);
        }

        changeSelectedUser(targetId: number) {
            const recordIds = Object.keys(this.userProfiles);
            let selectedId: number = null;

            recordIds.forEach((id, index) => {
                if (this.userProfiles[id].ProfileId === targetId) {
                    selectedId = index;
                }
            });

            if (selectedId === null) {
                throw Error("Attempted to change to a non-existent user");
            }

            this.set('selectedProfileId', recordIds[selectedId]);
        }
    }

    return declare([Stateful], ProfileCollectionViewModel.prototype);
});
