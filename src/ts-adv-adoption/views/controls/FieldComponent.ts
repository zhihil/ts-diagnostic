import dojo_declare from "dojo/_base/declare";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import template from 'dojo/text!templates/controls/FieldComponentTemplate.html';
import { IFieldComponent } from "../views";

interface FieldComponent extends IFieldComponent {}

class FieldComponent implements IFieldComponent {
  readonly templateString = template;

  /* Label name */
  readonly fieldLabel = "";

  /* Dojo attach points */
  readonly fieldNode: HTMLSpanElement = null;

  /* Binding for the field content */
  value: string = null;
  _setValueAttr(value: string) {
    this.value = value;
    this.fieldNode.textContent = this.value;
  }
}

export default dojo_declare([_WidgetBase, _TemplatedMixin], FieldComponent.prototype);
