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
  template
) => {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,

    /* Model */
    model: null,

    /* Attach points */
    fieldName: null,
    fieldAge: null,
    fieldOccupation: null,
    fieldWorkAddress: null,
    fieldGender: null,
    fieldPhoneNumber: null,
    fieldPhoneNumberBusiness1: null,
    fieldPhoneNumberBusiness2: null,
    fieldSIN: null,

    /* Watch handles */
    handles: [],

    /* Lifecycle Methods */
    constructor() {},

    _setModelAttr(value) {
        this.model = value;
        if (value) this.reactToModel();
    },


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
    },
  });
});
