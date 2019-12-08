define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/StudentViewTemplate.html',
  'views/controls/ProfileColumn',
], (
  declare, 
  _WidgetBase, 
  _TemplatedMixin, 
  _WidgetsInTemplateMixin,
  template: string
) => {
  class StudentView implements IStudentView {
    templateString = template;

    /* Mixin implementation methods */
    inherited: (args: IArguments) => any;    
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;
    watch: (prop: string, handler: Dojo.WatchHandler) => void;

    /* Model */
    model = null;

    /* Dojo attach points */
    fieldName: IFieldComponent = null;
    fieldAge: IFieldComponent = null;
    fieldSchool: IFieldComponent = null;
    fieldOccupation: IFieldComponent = null;
    fieldCity: IFieldComponent = null;
    fieldState: IFieldComponent = null;
    fieldCountry: IFieldComponent = null;
    fieldAddress: IFieldComponent = null;
    fieldWorkAddress: IFieldComponent = null;
    fieldGender: IFieldComponent = null;
    fieldBirthday: IFieldComponent = null;
    fieldHometown: IFieldComponent = null;
    fieldPhoneNumber: IFieldComponent = null;
    fieldPhoneNumberBusiness1: IFieldComponent = null;
    fieldPhoneNumberBusiness2: IFieldComponent = null;
    fieldStatus: IFieldComponent = null;
    fieldSIN: IFieldComponent = null;
    friendsListNode: IFieldComponent = null;
    coursesListNode: IFieldComponent = null;
    domNode: HTMLDivElement = null;

    constructor() { 
      this.inherited(arguments);
    }

    _setModelAttr(value) {
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
