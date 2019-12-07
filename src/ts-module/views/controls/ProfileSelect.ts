define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!templates/controls/ProfileSelectTemplate.html',
    'dijit/form/Select',
], (
  declare, 
  lang, 
  _WidgetBase, 
  _TemplatedMixin, 
  _WidgetsInTemplateMixin, 
  template,
  Select
) => {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,

    /* Dojo attach points */
    selectContainer: null,
    selectWidget: null,

    /* Dojo props */
    values: [],
    onChanged: () => {},

    _setValuesAttr(newValues) {
      this.values = newValues;
      this._clearValueNodes();

      this.selectWidget = new Select({
        name: 'profile-select',
        options: this.values,
        onChange: lang.hitch(this, this._onChanged)
      });
      this.selectWidget.placeAt(this.selectContainer).startup();
    },

    _clearValueNodes() {
      if (this.selectWidget) this.selectWidget.destroy();
      const rootNode = this.selectContainer;
      while (rootNode.firstChild) {
        rootNode.removeChild(rootNode.firstChild);
      }
    },

    _onChanged(newVal) {
      this.onChanged(newVal);
    }
  })
});
