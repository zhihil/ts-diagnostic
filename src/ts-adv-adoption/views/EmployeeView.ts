import dojo_declare from "dojo/_base/declare";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import template from 'dojo/text!templates/EmployeeViewTemplate.html';
import "./controls/FieldComponent";
import { IEmployeeView, IFieldComponent } from "./views";
import { IEmployeeViewModel } from "../models/models";

interface EmployeeView extends IEmployeeView {}
class EmployeeView {
  readonly templateString = template;

  /* Model */
  model: IEmployeeViewModel = null;

  /* Attach points */
  readonly fieldName: IFieldComponent = null;
  readonly fieldAge: IFieldComponent = null;
  readonly fieldOccupation: IFieldComponent = null;
  readonly fieldWorkAddress: IFieldComponent = null;
  readonly fieldGender: IFieldComponent = null;
  readonly fieldPhoneNumber: IFieldComponent = null;
  readonly fieldPhoneNumberBusiness1: IFieldComponent = null;
  readonly fieldPhoneNumberBusiness2: IFieldComponent = null;
  readonly fieldSIN: IFieldComponent = null;

  /* Watch handles */
  readonly handles: any[] = [];

  /* Lifecycle Methods */
  constructor() {}

  _setModelAttr(value: IEmployeeViewModel) {
      this.model = value;
      if (value) this.reactToModel();
  }

  reactToModel() {
    this.fieldName.set('value', `${this.model.FirstName} ${this.model.LastName}`);
    this.fieldAge.set('value', `${this.model.Age}`);
    this.fieldOccupation.set('value', this.model.Occupation);
    this.fieldWorkAddress.set('value', this.model.WorkAddress);
    this.fieldGender.set('value', this.model.Gender);
    this.fieldPhoneNumber.set('value', this.model.PhoneNumberCell);
    this.fieldPhoneNumberBusiness1.set('value', this.model.PhoneNumberBusiness1);
    this.fieldPhoneNumberBusiness2.set('value', this.model.PhoneNumberBusiness2);
    this.fieldSIN.set('value', this.model.SIN);
  }
}

export default dojo_declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], EmployeeView.prototype);
