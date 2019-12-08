define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    'dijit/_WidgetsInTemplateMixin',
    "dojo/text!templates/controls/ProfileColumnTemplate.html",
    "views/controls/FieldComponent",
    "dojo/domReady!"
], (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template: string) => {
    class ProfileColumn {
        templateString = template;

        /* IPersonalViewModel */
        model = null;

        /* Dojo Attach Points */
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

        /* Lifecycle Methods */
        constructor() { }

        _setModelAttr(value) {
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
            this.fieldWorkAddress.set('value', this.model.WorkAddress);
            this.fieldGender.set('value', this.model.Gender);
            this.fieldBirthday.set('value', this.model.Birthday);
            this.fieldHometown.set('value', this.model.Hometown);
            this.fieldPhoneNumber.set('value', this.model.PhoneNumberCell);
            this.fieldPhoneNumberBusiness1.set('value', this.model.PhoneNumberBusiness1);
            this.fieldPhoneNumberBusiness2.set('value', this.model.PhoneNumberBusiness2);
            this.fieldStatus.set('value', this.model.Status);
            this.fieldSIN.set('value', this.model.SIN);
        }
    }
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], ProfileColumn.prototype);
});
