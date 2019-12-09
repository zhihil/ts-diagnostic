/// <reference path="./views.d.ts" />

define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/text!templates/EmployeeViewTemplate.html',
  'views/controls/ProfileColumn'
], (
  declare: Function, 
  _WidgetBase: object, 
  _TemplatedMixin: object, 
  _WidgetsInTemplateMixin: object, 
  template: string
) => {
  class EmployeeView implements IEmployeeView {
    readonly templateString = template;

    /* Needed to satisfy interface */
    inherited: (args: any[]) => any;
    getInherited: (args: any[]) => any;
    isInstanceOf: (constructor: Dojo.Class) => boolean;
    domNode: Dojo._WidgetBase;
    srcNodeRef: HTMLElement;
    containerNode: Dojo._WidgetBase | HTMLElement;
    postMixInProperties: () => void;
    buildRendering: () => any;
    postCreate: () => any;
    startup: () => any;
    destroy: () => any;
    set: <K extends keyof this>(prop: K, value: this[K]) => void;
    get: <K extends keyof this>(prop: K) => this[K];
    watch: <K extends keyof this>(prop: K, handler: Dojo.WatchHandler<this[K]>) => void;

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

  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], EmployeeView.prototype);
});
