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
  class FieldComponent implements IFieldComponent {
    readonly templateString = template;

    /* Needed to satisfy interface */
    inherited: (args: any[]) => any;
    getInherited: (args: any[]) => any;
    isInstanceOf: (constructor: Dojo.Class) => boolean;
    domNode: Dojo._WidgetBase;
    srcNodeRef: HTMLElement;
    containerNode: Dojo._WidgetBase | HTMLElement;
    postMixInProperties: () => void;
    buildRendering: () => any;
    postCreate: () => any;
    startup: () => any;
    destroy: () => any;
    set: <K extends keyof this>(prop: K, value: this[K]) => void;
    get: <K extends keyof this>(prop: K) => this[K];
    watch: <K extends keyof this>(prop: K, handler: Dojo.WatchHandler<this[K]>) => void;

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