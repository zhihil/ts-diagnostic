define([
  'dojo/_base/declare',
  'dojo/_base/array',
  'dojo/dom-construct',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!templates/controls/ComponentDViewTemplate.html'
], (declare, arrayUtil, domConstruct, _WidgetBase, _TemplatedMixin, template) => {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,

    /* Attach points */
    listContainerNode: null,

    /* Dojo props */
    listItems: [],

    constructor() { },

    _setListItemsAttr(value) {
      this.listItems = value;
      this._renderListItems();
    },

    _renderListItems() {
      if (this.listContainerNode) {
        this._clearListItems();
        arrayUtil.forEach(this.listItems, item => {
          const listItem = domConstruct.create("div", {
            className: "component-d-item",
            innerHTML: item.content
          });
          domConstruct.place(listItem, this.listContainerNode);
        });
      }
    },

    _clearListItems() {
      while (this.listContainerNode.firstChild) {
        this.listContainerNode.removeChild(
          this.listContainerNode.firstChild
        );
      }
    }
  });
});
