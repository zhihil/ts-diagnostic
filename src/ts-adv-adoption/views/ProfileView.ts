/// <reference path="./views.d.ts" />

import ProfileCollectionViewModel from "../models/ProfileCollectionViewModel";
import dojo_declare from "dojo/_base/declare";
import lang from "dojo/_base/lang";
import domStyle from "dojo/dom-style";
import on from "dojo/on";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import _WidgetBase from "dijit/_WidgetBase";
import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import template from "dojo/text!templates/ProfileViewTemplate.html";
import _ from "./controls/ProfileColumn";
import __ from "./controls/ProfileSelect";
import Button from "dijit/form/Button";
import { IProfileViewModel, IProfileCollectionViewModel } from "../models/models";
import { IProfileView, IPersonalView, IEmployeeView, IStudentView, IProfileColumn, IProfileSelect } from "./views";

type viewType = 'personal' | 'employee' | 'student' | null;

interface ProfileView extends IProfileView {}
class ProfileView {
  templateString = template;

  /* Model */
  readonly profileModels: IProfileCollectionViewModel = null;
  selectedModel: IProfileViewModel = null;

  /* Attach points */
  readonly personalView: IPersonalView = null;
  readonly employeeView: IEmployeeView = null;
  readonly studentView: IStudentView = null;
  readonly profileColumn: IProfileColumn = null;
  readonly profileSelect: IProfileSelect = null;
  readonly domNode: HTMLElement = null;
  readonly showPersonalBtn: Button = null;
  readonly showEmployeeBtn: Button = null;
  readonly showStudentBtn: Button = null;

  /* UI State */
  currentViewType: viewType = null;
  currentView: IPersonalView | IEmployeeView | IStudentView = null;

  /* Watch handles */
  readonly handles: any[] = [];

  /* Function references to lang.hitch'd methods */
  readonly onSelectedProfileChanged: (newProfileId: number) => void = null;

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

export default dojo_declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], ProfileView.prototype);
