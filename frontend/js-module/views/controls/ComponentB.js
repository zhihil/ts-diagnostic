define([
  "dojo/_base/declare",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!templates/controls/ComponentBViewTemplate.html"
], (declare, _WidgetBase, _TemplatedMixin, template) => {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,

    /* Attach points */
    progressBar: null,

    /* UI state */
    progress: 0,
    animation: null,

    constructor: function() { },

    _setProgressAttr(value) {
      this.progress = value;
      this.progressBar.style.width = `${this.progress}%`;
    }
  });
});
