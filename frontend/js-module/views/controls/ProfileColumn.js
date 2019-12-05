define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!templates/controls/ProfileColumnTemplate.html",
    "dojo/domReady!"
], (declare, _WidgetBase, _TemplatedMixin, template) => {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        /* IPersonalViewModel */
        model: null,

        /* Dojo Attach Points */
        friendsListNode: null,

        /* UI State */
        firstName: null,
        lastName: null,
        age: null,
        school: null,
        occupation: null,
        city: null,
        state: null,
        country: null,
        address: null,
        gender: null,
        birthday: null,
        hometown: null,
        phoneNumber: null,
        status: null,
        friends: [],

        /* Lifecycle Methods */
        constructor() { },
    });
});
