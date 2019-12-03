define([
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./ComponentAViewTemplate.html",
    "dojo/domReady"
], (_WidgetBase, _TemplatedMixin, template) => {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        constructor: function() { }
    });
});
