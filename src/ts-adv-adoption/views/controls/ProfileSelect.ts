/// <reference path="../views.d.ts" />

define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!templates/controls/ProfileSelectTemplate.html',
    'dijit/form/Select',
], (
  declare: Function, 
  lang: any, 
  _WidgetBase: object, 
  _TemplatedMixin: object, 
  _WidgetsInTemplateMixin: object, 
  template: string,
  Select: any
) => {
  class ProfileSelect implements IProfileSelect {
    readonly templateString = template;

    /* Needed to satisfy interface */
    inherited: (args: any[]) => any;
    getInherited: (args: any[]) => any;
    isInstanceOf: (constructor: Dojo.Class) => boolean;
    value: string;
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

    /* Dojo attach points */
    readonly selectContainer: HTMLDivElement = null;
    selectWidget: typeof Select = null; 

    /* Dojo props */
    values: DojoSelectValue[] = [];
    readonly onChanged: (newVal: number) => void = () => {};

    _setValuesAttr(newValues: DojoSelectValue[]) {
      this.values = newValues;
      this._clearValueNodes();

      this.selectWidget = new Select({
        name: 'profile-select',
        options: this.values,
        onChange: lang.hitch(this, this._onChanged)
      });
      this.selectWidget.placeAt(this.selectContainer).startup();
    }

    _clearValueNodes() {
      if (this.selectWidget) this.selectWidget.destroy();
      const rootNode = this.selectContainer;
      while (rootNode.firstChild) {
        rootNode.removeChild(rootNode.firstChild);
      }
    }

    _onChanged(newVal: number) {
      this.onChanged(newVal);
    }
  }

  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], ProfileSelect.prototype);
});
