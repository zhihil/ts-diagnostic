define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!templates/controls/FieldComponentTemplate.html'
], (declare, _WidgetBase, _TemplatedMixin, template: string) => {
  class FieldComponent {
    templateString = template;

    /* Label name */
    fieldLabel = "";

    /* Dojo attach points */
    fieldNode: HTMLSpanElement = null;

    /* Binding for the field content */
    value: string = null;
    _setValueAttr(value: string) {
      this.value = value;
      this.fieldNode.textContent = this.value;
    }
  }

  return declare([_WidgetBase, _TemplatedMixin], FieldComponent.prototype);
});