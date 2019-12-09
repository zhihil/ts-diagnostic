/// <reference path="../ts-adv-adoption.d.ts" />

interface View extends Dojo.Class, Dojo._WidgetBase, Dojo._WidgetsInTemplateMixin {}
interface SimpleView extends Dojo.Class, Dojo._WidgetBase {}

declare interface IFieldComponent extends SimpleView {
  value: string;
}

declare interface IProfileColumn extends View {
  model: IProfileViewModel
}

declare interface DojoSelectValue {
  value: any;
  label: string;
}

declare interface IProfileSelect extends View {
  values: DojoSelectValue[];
}

declare interface IProfileView extends View {
  model: IProfileViewModel;
}
declare interface IEmployeeView extends View {
  model: IEmployeeViewModel
}
declare interface IStudentView extends View {
  model: IStudentViewModel
}
declare interface IPersonalView extends View {
  model: IPersonalViewModel
}
