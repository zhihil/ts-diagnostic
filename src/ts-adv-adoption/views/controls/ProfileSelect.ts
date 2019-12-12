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
  interface ProfileSelect extends IProfileSelect {}

  class ProfileSelect {
    readonly templateString = template;

    readonly DaveThompson = "I love coke zero";

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
