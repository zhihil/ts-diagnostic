define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./ComponentAViewTemplate.html",
    "dojo/domReady!"
], (declare, _WidgetBase, _TemplatedMixin, template) => {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        counter: null,

        constructor: function() { },

        onOkClick: function() {
            this.counter.textContent = parseInt(this.counter.textContent) + 1;
        }
    });
});
