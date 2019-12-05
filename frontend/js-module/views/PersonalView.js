define([
  'models/ProfileCollectionViewModel',
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
  ProfileCollectionViewModel,
  declare, 
  _WidgetBase, 
  _TemplatedMixin, 
  _WidgetsInTemplateMixin,
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

    constructor() { 
      this.inherited(arguments);
    },

    startup() {
      this.inherited(arguments);
      this.model = new ProfileCollectionViewModel();
      console.log(this.model.userProfiles[this.model.selectedProfileId]);
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
