define([
  'models/ProfileCollectionViewModel',
  'dojo/_base/declare',
  'dojo/_base/lang',
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
  lang,
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

    constructor() { 
      this.inherited(arguments);
    },

    startup() {
      this.inherited(arguments);
      this.profileModels = new ProfileCollectionViewModel();
      this.profileModels.watch('selectedProfileId', lang.hitch(this, this.onSelectedProfileIdChanged));
    },

    onSelectedProfileIdChanged(_propName, _oldValue, _newValue) {
      /* When the currently selected profile has changed, update the
          binding of this view to the newly selected model.
      */
     const selectedProfileId = this.profileModels.selectedProfileId;
     this.set('selectedModel', this.profileModels.userProfiles[selectedProfileId]);
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
