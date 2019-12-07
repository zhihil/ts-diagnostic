define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!templates/controls/FieldComponentTemplate.html'
], (declare, _WidgetBase, _TemplatedMixin, template) => {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,

    /* Label name */
    fieldLabel: "",

    /* Dojo attach points */
    fieldNode: null,

    /* Binding for the field content */
    value: null,
    _setValueAttr(value) {
      this.value = value;
      this.fieldNode.textContent = this.value;
    }
  });
});