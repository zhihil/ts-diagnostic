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
  template
) => {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,

    /* Dojo attach points */
    fieldName: null,
    fieldAge: null,
    fieldOccupation: null,
    fieldCity: null,
    fieldState: null,
    fieldCountry: null,
    fieldAddress: null,
    fieldWorkAddress: null,
    fieldGender: null,
    fieldBirthday: null,
    fieldHometown: null,
    fieldPhoneNumber: null,
    fieldPhoneNumberBusiness1: null,
    fieldPhoneNumberBusiness2: null,
    fieldStatus: null,
    fieldSIN: null,
    friendsListNode: null,
    coursesListNode: null,

    constructor() { 
      this.inherited(arguments);
    },

    _setModelAttr(value) {
      this.model = value;
      if (value) this.reactToModel();
    },

    reactToModel() {
      this.fieldName.set('value', `${this.model.FirstName} ${this.model.LastName}`);
      this.fieldAge.set('value', this.model.Age);
      this.fieldSchool.set('value', this.model.School);
      this.fieldGender.set('value', this.model.Gender);
      this.fieldPhoneNumber.set('value', this.model.PhoneNumberCell);
      this.fieldSIN.set('value', this.model.SIN);
    }
  });
});
