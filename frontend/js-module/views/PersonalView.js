define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/PersonalViewTemplate.html',
  'views/controls/ProfileColumn',
  'views/controls/ComponentB',
  'views/controls/ComponentC',
  'views/controls/ComponentD'
], (
  declare, 
  _WidgetBase, 
  _TemplatedMixin, 
  _WidgetsInTemplateMixin,
  template
) => {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,

    /* Model */
    profileModels: null,
    selectedModel: null,

    /* Attach points */
    profileColumn: null,

    /* Watch handles */
    handles: [],

    constructor() {},

    _setSelectedModelAttr(value) {
      this.selectedModel = value;
      this.profileColumn.set('model', value);
    }
  });
});
