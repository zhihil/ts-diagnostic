define([
  'models/ProfileCollectionViewModel',
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/dom-style',
  'dojo/on',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/ProfileViewTemplate.html',
  'views/controls/ProfileColumn',
  'views/controls/ProfileSelect',
  'dijit/form/Button'
], (
  ProfileCollectionViewModel,
  declare, 
  lang,
  domStyle,
  on,
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
    currentView: null,

    showPersonalBtn: null,
    showEmployeeBtn: null,
    showStudentBtn: null,

    /* Watch handles */
    handles: [],

    /* Function references to lang.hitch'd methods */
    onSelectedProfileChanged: null,
  
    constructor() { 
      this.profileModels = new ProfileCollectionViewModel();

      this.handles.push(
        this.profileModels.watch('selectedProfileId', lang.hitch(this, this.onSelectedProfileIdChanged))
      );

      this.profileModels.getUsersData().then(() => {
        const ids = Object.keys(this.profileModels.userProfiles);
        this.profileSelect.set('values', 
          ids.map(id => {
            const model = this.profileModels.userProfiles[id];
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

      domStyle.set(this.personalView.domNode, 'display', 'none');
      domStyle.set(this.employeeView.domNode, 'display', 'none');
      domStyle.set(this.studentView.domNode, 'display', 'none');

      this.set('currentView', 'personal');

      on(this.showPersonalBtn.domNode, 'click', () => {
        this.set('currentView', 'personal');
      });
      on(this.showEmployeeBtn.domNode, 'click', () => {
        this.set('currentView', 'employee');
      });
      on(this.showStudentBtn.domNode, 'click', () => {
        this.set('currentView', 'student');
      });
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
    },

    _setCurrentViewAttr(newVal) {
      if (this.currentView) {
        domStyle.set(this.currentView.domNode, 'display', 'none');
      }
  
      if (newVal === 'personal')  {
        domStyle.set(this.personalView.domNode, 'display', 'block');
        this.currentView = this.personalView;
      } else if (newVal === 'employee')  {
        domStyle.set(this.employeeView.domNode, 'display', 'block');
        this.currentView = this.employeeView;
      } else if (newVal === 'student')  {
        domStyle.set(this.studentView.domNode, 'display', 'block');
        this.currentView = this.studentView;
      } else {
        throw Error('Invalid view setting');
      }
    }
  });
});
