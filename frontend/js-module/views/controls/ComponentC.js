define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!templates/controls/ComponentCViewTemplate.html'
], (declare, _WidgetBase, _TemplatedMixin, template) => {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,

    /* Attach points */
    modalNode: null,
    contentNode: null,

    /* Dojo props */
    handleModalConfirm: null,
    handleModalCancel: null,
    content: "",

    constructor({ 
      content, 
      handleModalConfirm = null,  
      handleModalCancel = null
    }) { 
      this.content = content;
      this.handleModalCancel = handleModalCancel;
      this.handleModalConfirm = handleModalConfirm;
    },

    startup() {
      this.contentNode.textContent = this.content;
    },

    showModal() { 
      this.modalNode.style.display = "fixed";
    },

    _onModalConfirm() { 
      if (this.handleModalConfirm) this.handleModalConfirm();
      this.modalNode.style.display = "none";
    },

    _onModalCancel() { 
      if (this.handleModalCancel) this.handleModalCancel();
      this.modalNode.style.display = "none";
    }
  });
});
