define([
  'models/ProfileCollectionViewModel',
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/ProfileViewTemplate.html',
  'views/controls/ProfileColumn'
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
    personalView: null,
    employeeView: null,
    studentView: null,
    profileColumn: null,

    /* Watch handles */
    handles: [],

    constructor() { 
      this.inherited(arguments);
      this.profileModels = new ProfileCollectionViewModel();

      this.handles.push(
        this.profileModels.watch('selectedProfileId', lang.hitch(this, this.onSelectedProfileIdChanged))
      );
    },

    startup() {
      this.inherited(arguments);
      this.profileModels.initialize();
    },

    destroy() {
      this.handles.forEach(handle => handle.unwatch());
      this.profileModels.destroy();
    },

    onSelectedProfileIdChanged(_propName, _oldValue, _newValue) {
      /* When the currently selected profile has changed, update the
          binding of this view to the newly selected model.
      */
     const selectedProfileId = this.profileModels.selectedProfileId;
     this.set('selectedModel', this.profileModels.userProfiles[selectedProfileId]);

     this.personalView.set('model', this.selectedModel.personalViewModel);
     this.employeeView.set('model', this.selectedModel.employeeViewModel);
     this.studentView.set('model', this.selectedModel.studentViewModel);
     this.profileColumn.set('model', this.selectedModel);
    }
  });
});
