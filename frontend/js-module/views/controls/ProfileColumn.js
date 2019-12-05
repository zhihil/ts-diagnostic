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
        FirstName: null,
        LastName: null,
        Age: null,
        School: null,
        Occupation: null,
        City: null,
        State: null,
        Country: null,
        Address: null,
        Gender: null,
        Birthday: null,
        Hometown: null,
        PhoneNumberCell: null,
        Status: null,
        Friends: [],

        count: 0,

        /* Lifecycle Methods */
        constructor() { }
    });
});
