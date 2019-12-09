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
  class FieldComponent implements IFieldComponent {
    readonly templateString = template;
  
    /* Mixin implementation methods */  
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;
    watch: <T>(prop: string, handler: WatchHandler<T>) => void;

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