define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/EmployeeViewTemplate.html',
  'views/controls/ProfileColumn'
], (
  declare, 
  _WidgetBase, 
  _TemplatedMixin, 
  _WidgetsInTemplateMixin,
  template: string
) => {
  class EmployeeView {
    templateString = template;

    /* Model */
    model = null;

    /* Attach points */
    fieldName: IFieldComponent = null;
    fieldAge: IFieldComponent = null;
    fieldOccupation: IFieldComponent = null;
    fieldWorkAddress: IFieldComponent = null;
    fieldGender: IFieldComponent = null;
    fieldPhoneNumber: IFieldComponent = null;
    fieldPhoneNumberBusiness1: IFieldComponent = null;
    fieldPhoneNumberBusiness2: IFieldComponent = null;
    fieldSIN: IFieldComponent = null;

    /* Watch handles */
    handles: Dojo.Handle[] = [];

    /* Lifecycle Methods */
    constructor() {}

    _setModelAttr(value) {
        this.model = value;
        if (value) this.reactToModel();
    }

    reactToModel() {
      this.fieldName.set('value', `${this.model.FirstName} ${this.model.LastName}`);
      this.fieldAge.set('value', this.model.Age);
      this.fieldOccupation.set('value', this.model.Occupation);
      this.fieldWorkAddress.set('value', this.model.WorkAddress);
      this.fieldGender.set('value', this.model.Gender);
      this.fieldPhoneNumber.set('value', this.model.PhoneNumberCell);
      this.fieldPhoneNumberBusiness1.set('value', this.model.PhoneNumberBusiness1);
      this.fieldPhoneNumberBusiness2.set('value', this.model.PhoneNumberBusiness2);
      this.fieldSIN.set('value', this.model.SIN);
    }
  }

  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], EmployeeView.prototype);
});
