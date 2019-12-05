define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'models/ProfileCollectionViewModel',
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
  ProfileCollectionViewModel,
  template
) => {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,

    questionInput: null,

    listItems: [
      {
        content: 'Hello'
      },
      {
        content: 'World'
      },
      {
        content: 'Everyone'
      }
    ],
    model: null,

    constructor() { },

    startup() {
      this.model = new ProfileCollectionViewModel();
    },

    submitQuestion() {
      if (this.questionInput) {
        this.set('listItems', [
          ...this.get('listItems'),
          {
            content: this.questionInput.value
          }
        ]);
        this.questionInput.value = "";
      }
    }
  });
});
