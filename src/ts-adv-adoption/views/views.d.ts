import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import _WidgetBase from "dijit/_WidgetBase";
import { SelectValue } from "dijit/form/Select";
import { IProfileViewModel, IEmployeeViewModel, IStudentViewModel, IPersonalViewModel } from "../models/models";

interface View extends DojoClass, _WidgetBase, _WidgetsInTemplateMixin {}
interface SimpleView extends DojoClass, _WidgetBase {}

export interface IFieldComponent extends SimpleView {
  value: string;
}

export interface IProfileColumn extends View {
  model: IProfileViewModel
}

export interface IProfileSelect extends View {
  values: SelectValue[];
}

export interface IProfileView extends View {
  model: IProfileViewModel;
}
export interface IEmployeeView extends View {
  model: IEmployeeViewModel
}
export interface IStudentView extends View {
  model: IStudentViewModel
}
export interface IPersonalView extends View {
  model: IPersonalViewModel
}
