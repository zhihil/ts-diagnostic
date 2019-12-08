define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/StudentViewTemplate.html',
  'views/controls/ProfileColumn',
], (
  declare: Function, 
  _WidgetBase: object, 
  _TemplatedMixin: object, 
  _WidgetsInTemplateMixin: object,
  template: string
) => {
  class StudentView implements IStudentView {
    readonly templateString = template;

    /* Mixin implementation methods */ 
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;
    watch: (prop: string, handler: Function) => void;

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
    readonly domNode: HTMLDivElement = null;

    _setModelAttr(value: IStudentViewModel) {
      this.model = value;
      if (value) this.reactToModel();
    }

    reactToModel() {
      this.fieldName.set('value', `${this.model.FirstName} ${this.model.LastName}`);
      this.fieldAge.set('value', this.model.Age);
      this.fieldSchool.set('value', this.model.School);
      this.fieldGender.set('value', this.model.Gender);
      this.fieldPhoneNumber.set('value', this.model.PhoneNumberCell);
      this.fieldSIN.set('value', this.model.SIN);
    }
  }

  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], StudentView.prototype);
});
