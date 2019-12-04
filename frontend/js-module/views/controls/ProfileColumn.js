define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!templates/controls/ProfileColumnTemplate.html",
    "dojo/domReady!"
], (declare, _WidgetBase, _TemplatedMixin, template) => {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        /* Dojo Attach Points */
        counter: null,

        /* UI State */
        count: 0,

        /* Lifecycle Methods */
        constructor: function() { },

        startup: function() {
            this.counter.textContent = this.count;
        },

        /* Methods */
        increment: function() {
            this.count++;
            this.counter.textContent = this.count;
        },

        decrement: function() {
            this.count--;
            this.counter.textContent = this.count;
        }
    });
});
