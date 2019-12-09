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
    readonly templateString = template;

    /* Mixin implementation methods */
    inherited: (args: IArguments) => any;    
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;
    watch: <T>(prop: string, handler: WatchHandler<T>) => void;

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
    readonly domNode: HTMLDivElement = null;

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
