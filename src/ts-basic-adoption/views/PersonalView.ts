define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/PersonalViewTemplate.html',
  'views/controls/ProfileColumn'
], (
  declare: Function, 
  _WidgetBase: object, 
  _TemplatedMixin: object, 
  _WidgetsInTemplateMixin: object,
  template: string
) => {
  class PersonalView implements IPersonalView {
    templateString = template;

    /* Mixin implementation methods */
    inherited: (args: IArguments) => any;    
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;

    /* Model */
    model: IPersonalViewModel = null;

    /* Attach points */
    fieldName: IFieldComponent = null;
    fieldAge: IFieldComponent = null;
    fieldSchool: IFieldComponent = null;
    fieldOccupation: IFieldComponent = null;
    fieldCity: IFieldComponent = null;
    fieldState: IFieldComponent = null;
    fieldCountry: IFieldComponent = null;
    fieldAddress: IFieldComponent = null;
    fieldGender: IFieldComponent = null;
    fieldBirthday: IFieldComponent = null;
    fieldHometown: IFieldComponent = null;
    fieldPhoneNumber: IFieldComponent = null;
    fieldStatus: IFieldComponent = null;
    friendsListNode: IFieldComponent = null;
    domNode: HTMLDivElement = null;

    /* Watch handles */
    handles: any[] = [];

    /* Lifecycle Methods */
    constructor() {}

    _setModelAttr(value: IPersonalViewModel) {
        this.model = value;
        if (value) this.reactToModel();
    }

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
    }
  }

  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], PersonalView.prototype);
});
