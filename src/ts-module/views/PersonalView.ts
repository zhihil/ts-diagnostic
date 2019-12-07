define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/PersonalViewTemplate.html',
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
    fieldCity: null,
    fieldState: null,
    fieldCountry: null,
    fieldAddress: null,
    fieldGender: null,
    fieldBirthday: null,
    fieldHometown: null,
    fieldPhoneNumber: null,
    fieldStatus: null,
    friendsListNode: null,

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
    },
  });
});
