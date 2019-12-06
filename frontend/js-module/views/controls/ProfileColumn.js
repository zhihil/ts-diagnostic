define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    'dijit/_WidgetsInTemplateMixin',
    "dojo/text!templates/controls/ProfileColumnTemplate.html",
    "views/controls/FieldComponent",
    "dojo/domReady!"
], (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) => {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,

        /* IPersonalViewModel */
        model: null,

        /* Dojo Attach Points */
        friendsListNode: null,

        /* Lifecycle Methods */
        constructor() { }
    });
});
