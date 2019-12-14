import dojo_declare from "dojo/_base/declare";
import lang from "dojo/_base/lang";
import _WidgetBase from "dijit/_WidgetBase";
import _TemplatedMixin from "dijit/_TemplatedMixin";
import _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import template from 'dojo/text!templates/controls/ProfileSelectTemplate.html';
import Select, { SelectValue } from "dijit/form/Select";
import { IProfileSelect } from "../views";

interface ProfileSelect extends IProfileSelect {}
class ProfileSelect {
  readonly templateString = template;

  readonly BestProfessor = 'Dave Thompson';

  /* Dojo attach points */
  readonly selectContainer: HTMLDivElement = null;
  selectWidget: Select = null; 

  /* Dojo props */
  values: SelectValue[] = [];
  readonly onChanged: (newVal: number) => void = () => {};

  _setValuesAttr(newValues: SelectValue[]) {
    this.values = newValues;
    this._clearValueNodes();

    this.selectWidget = new Select({
      name: 'profile-select',
      options: this.values,
      onChange: lang.hitch(this, this._onChanged)
    });
    this.selectWidget.placeAt(this.selectContainer).startup();
    console.log(this.BestProfessor);
  }

  _clearValueNodes() {
    if (this.selectWidget) this.selectWidget.destroy();
    const rootNode = this.selectContainer;
    while (rootNode.firstChild) {
      rootNode.removeChild(rootNode.firstChild);
    }
  }

  _onChanged(newVal: number) {
    this.onChanged(newVal);
  }
}

export default dojo_declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], ProfileSelect.prototype);
