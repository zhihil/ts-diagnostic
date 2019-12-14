import dojo_declare from "dojo/_base/declare";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import template from "dojo/text!templates/controls/ProfileColumnTemplate.html";
import _ from "./FieldComponent";
import __ from "dojo/domReady!";
import { IProfileColumn, IFieldComponent } from "../views";
import { IProfileViewModel } from "../../models/models";

interface ProfileColumn extends IProfileColumn {}

class ProfileColumn {
    readonly templateString = template;

    /* IProfileViewModel */
    model: IProfileViewModel = null;

    /* Dojo Attach Points */
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

    /* Lifecycle Methods */
    constructor() { }

    _setModelAttr(value: IProfileViewModel) {
        this.model = value;
        if (value) this.reactToModel();
    }

    reactToModel() {
        this.fieldName.set('value', `${this.model.FirstName} ${this.model.LastName}`);
        this.fieldAge.set('value', `${this.model.Age}`);
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
export default dojo_declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], ProfileColumn.prototype);
