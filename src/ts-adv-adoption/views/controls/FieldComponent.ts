/// <reference path="../views.d.ts" />

define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!templates/controls/FieldComponentTemplate.html'
], (
  declare: Dojo.declare, 
  _WidgetBase: Dojo._WidgetBase, 
  _TemplatedMixin: Dojo._TemplatedMixin, 
  template: string
) => {
  interface FieldComponent extends IFieldComponent {}

  class FieldComponent implements IFieldComponent {
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