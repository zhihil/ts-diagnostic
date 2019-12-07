define([
  'models/ProfileCollectionViewModel',
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/ProfileViewTemplate.html',
  'views/controls/ProfileColumn',
  'views/controls/ProfileSelect'
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
    profileSelect: null,

    /* Watch handles */
    handles: [],

    /* Function references to lang.hitch'd methods */
    onSelectedProfileChanged: null,

    constructor() { 
      this.inherited(arguments);
      this.profileModels = new ProfileCollectionViewModel();

      this.handles.push(
        this.profileModels.watch('selectedProfileId', lang.hitch(this, this.onSelectedProfileIdChanged))
      );

      this.profileModels.getUsersData().then(() => {
        const ids = Object.keys(this.profileModels.userProfiles);
        this.profileSelect.set('values', 
          ids.map(id => {
            const model =this.profileModels.userProfiles[id];
            return ({
              value: model.ProfileId,
              label: `${model.FirstName} ${model.LastName}`
            })
          })
        );
      });

      this.onSelectedProfileChanged = lang.hitch(this, this._onSelectedProfileChanged);
    },

    startup() {
      this.inherited(arguments);
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
    },

    _onSelectedProfileChanged(newProfile) {
      this.profileModels.changeSelectedUser(newProfile);
    }
  });
});
