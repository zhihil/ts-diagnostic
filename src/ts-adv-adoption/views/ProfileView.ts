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
  ProfileCollectionViewModel: IConstructableProfileCollectionViewModel,
  declare: Function, 
  lang: any,
  domStyle: any,
  on: Function,
  _WidgetBase: object, 
  _TemplatedMixin: object, 
  _WidgetsInTemplateMixin: object,
  template: string
) => {
  type viewType = 'personal' | 'employee' | 'student' | null;

  class ProfileView implements IProfileView {
    templateString = template;

    /* Needed to satisfy interface */
    model: IProfileViewModel;
    inherited: (args: any[]) => any;
    getInherited: (args: any[]) => any;
    isInstanceOf: (constructor: Dojo.Class) => boolean;
    srcNodeRef: HTMLElement;
    containerNode: Dojo._WidgetBase | HTMLElement;
    postMixInProperties: () => void;
    buildRendering: () => any;
    postCreate: () => any;
    set: <K extends keyof this>(prop: K, value: this[K]) => void;
    get: <K extends keyof this>(prop: K) => this[K];
    watch: <K extends keyof this>(prop: K, handler: Dojo.WatchHandler<this[K]>) => void;
  
    /* Model */
    readonly profileModels: IProfileCollectionViewModel = null;
    selectedModel: IProfileViewModel = null;

    /* Attach points */
    readonly personalView: IPersonalView = null;
    readonly employeeView: IEmployeeView = null;
    readonly studentView: IStudentView = null;
    readonly profileColumn: IProfileColumn = null;
    readonly profileSelect: IProfileSelect = null;
    readonly domNode: Dojo._WidgetBase = null;
    readonly showPersonalBtn: any = null;
    readonly showEmployeeBtn: any = null;
    readonly showStudentBtn: any = null;

    /* UI State */
    currentViewType: viewType = null;
    currentView: IPersonalView | IEmployeeView | IStudentView = null;

    /* Watch handles */
    readonly handles: any[] = [];

    /* Function references to lang.hitch'd methods */
    readonly onSelectedProfileChanged: (newProfileId: string) => void = null;
  
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
      this.inherited(arguments as any)

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

    _onSelectedProfileChanged(newProfile: number) {
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
