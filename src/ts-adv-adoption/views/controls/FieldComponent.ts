define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!templates/controls/FieldComponentTemplate.html'
], (
  declare: Function, 
  _WidgetBase: object, 
  _TemplatedMixin: object, 
  template: string
) => {
  class FieldComponent {
    readonly templateString = template;

    /* Label name */
    readonly fieldLabel = "";

    /* Dojo attach points */
    readonly fieldNode: HTMLSpanElement = null;

    /* Binding for the field content */
    value: string = null;
    _setValueAttr(value: string) {
      this.value = value;
      this.fieldNode.textContent = this.value;
    }
  }

  return declare([_WidgetBase, _TemplatedMixin], FieldComponent.prototype);
});