import dojo_declare from "dojo/_base/declare";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import template from 'dojo/text!templates/PersonalViewTemplate.html';
import _ from "./controls/ProfileColumn";
import { IPersonalView, IFieldComponent } from "./views";
import { IPersonalViewModel } from "../models/models";

interface PersonalView extends IPersonalView {}
class PersonalView {
  readonly templateString = template;

  /* Model */
  model: IPersonalViewModel = null;

  /* Attach points */
  readonly fieldName: IFieldComponent = null;
  readonly fieldAge: IFieldComponent = null;
  readonly fieldSchool: IFieldComponent = null;
  readonly fieldOccupation: IFieldComponent = null;
  readonly fieldCity: IFieldComponent = null;
  readonly fieldState: IFieldComponent = null;
  readonly fieldCountry: IFieldComponent = null;
  readonly fieldAddress: IFieldComponent = null;
  readonly fieldGender: IFieldComponent = null;
  readonly fieldBirthday: IFieldComponent = null;
  readonly fieldHometown: IFieldComponent = null;
  readonly fieldPhoneNumber: IFieldComponent = null;
  readonly fieldStatus: IFieldComponent = null;
  readonly friendsListNode: IFieldComponent = null;
  readonly domNode: HTMLElement = null;

  /* Watch handles */
  readonly handles: any[] = [];

  /* Lifecycle Methods */
  constructor() {}

  _setModelAttr(value: IPersonalViewModel) {
      this.model = value;
      if (value) this.reactToModel();
  }

  reactToModel() {
      this.fieldName.set('value', `${this.model.FirstName} ${this.model.LastName}`);
      this.fieldAge.set('value', `${this.model.Age}`);
      this.fieldSchool.set('value', this.model.School);
      this.fieldOccupation.set('value', this.model.Occupation);
      this.fieldCity.set('value', this.model.City);
      this.fieldState.set('value', this.model.State);
      this.fieldCountry.set('value', this.model.Country);
      this.fieldAddress.set('value', this.model.Address);
      this.fieldGender.set('value', this.model.Gender);
      this.fieldBirthday.set('value', this.model.Birthday);
      this.fieldHometown.set('value', this.model.Hometown);
      this.fieldPhoneNumber.set('value', this.model.PhoneNumberCell);
      this.fieldStatus.set('value', this.model.Status);
  }
}

export default dojo_declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], PersonalView.prototype);
