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
  template: string
) => {
  type viewType = 'personal' | 'employee' | 'student' | null;

  class ProfileView implements IProfileView {
    templateString = template;

    /* Mixin implementation methods */
    inherited: (args: IArguments) => any;    
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;
    watch: (prop: string, handler: Dojo.WatchHandler) => void;

    /* Model */
    profileModels = null;
    selectedModel = null;

    /* Attach points */
    personalView: IPersonalView = null;
    employeeView: IEmployeeView = null;
    studentView: IStudentView = null;
    profileColumn: IProfileColumn = null;
    profileSelect: IProfileSelect = null;
    currentViewType: viewType = null;
    currentView: IPersonalView | IEmployeeView | IStudentView = null;
    domNode: HTMLDivElement = null;

    showPersonalBtn = null;
    showEmployeeBtn = null;
    showStudentBtn = null;

    /* Watch handles */
    handles: Dojo.Handle[] = [];

    /* Function references to lang.hitch'd methods */
    onSelectedProfileChanged: (newProfileId: string) => void = null;
  
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
    }

    startup() {
      this.inherited(arguments);

      domStyle.set(this.personalView.domNode, 'display', 'none');
      domStyle.set(this.employeeView.domNode, 'display', 'none');
      domStyle.set(this.studentView.domNode, 'display', 'none');

      this.set('currentViewType', 'personal');

      on(this.showPersonalBtn.domNode, 'click', () => {
        this.set('currentViewType', 'personal');
      });
      on(this.showEmployeeBtn.domNode, 'click', () => {
        this.set('currentViewType', 'employee');
      });
      on(this.showStudentBtn.domNode, 'click', () => {
        this.set('currentViewType', 'student');
      });
    }

    destroy() {
      this.handles.forEach(handle => handle.unwatch());
      this.profileModels.destroy();
    }

    onSelectedProfileIdChanged(_propName: string, _oldValue: string, _newValue: string) {
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

    _onSelectedProfileChanged(newProfile: string) {
      this.profileModels.changeSelectedUser(newProfile);
    }

    _setCurrentViewTypeAttr(newVal: viewType) {
      this.currentViewType = newVal;

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
  }

  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], ProfileView.prototype);
});
