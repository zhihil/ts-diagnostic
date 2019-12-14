import dojo_declare from "dojo/_base/declare";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import template from 'dojo/text!templates/StudentViewTemplate.html';
import "./controls/FieldComponent";
import { IStudentView, IFieldComponent } from "./views";
import { IStudentViewModel } from "../models/models";

interface StudentView extends IStudentView {}
class StudentView {
  readonly templateString = template;

  /* Model */
  model: IStudentViewModel = null;

  /* Dojo attach points */
  readonly fieldName: IFieldComponent = null;
  readonly fieldAge: IFieldComponent = null;
  readonly fieldSchool: IFieldComponent = null;
  readonly fieldOccupation: IFieldComponent = null;
  readonly fieldCity: IFieldComponent = null;
  readonly fieldState: IFieldComponent = null;
  readonly fieldCountry: IFieldComponent = null;
  readonly fieldAddress: IFieldComponent = null;
  readonly fieldWorkAddress: IFieldComponent = null;
  readonly fieldGender: IFieldComponent = null;
  readonly fieldBirthday: IFieldComponent = null;
  readonly fieldHometown: IFieldComponent = null;
  readonly fieldPhoneNumber: IFieldComponent = null;
  readonly fieldPhoneNumberBusiness1: IFieldComponent = null;
  readonly fieldPhoneNumberBusiness2: IFieldComponent = null;
  readonly fieldStatus: IFieldComponent = null;
  readonly fieldSIN: IFieldComponent = null;
  readonly friendsListNode: IFieldComponent = null;
  readonly coursesListNode: IFieldComponent = null;
  readonly domNode: HTMLElement = null;

  _setModelAttr(value: IStudentViewModel) {
    this.model = value;
    if (value) this.reactToModel();
  }

  reactToModel() {
    this.fieldName.set('value', `${this.model.FirstName} ${this.model.LastName}`);
    this.fieldAge.set('value', `${this.model.Age}`);
    this.fieldSchool.set('value', this.model.School);
    this.fieldGender.set('value', this.model.Gender);
    this.fieldPhoneNumber.set('value', this.model.PhoneNumberCell);
    this.fieldSIN.set('value', this.model.SIN);
  }
}

export default dojo_declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], StudentView.prototype);

