/* Dojo Plugins do not play well with ECMAScript imports/exports. This is the
    workaround recommended by most sites.
*/
declare module 'dojo/text!templates/controls/FieldComponentTemplate.html' {
    const template: string;
    export = template;
}

declare module "dojo/text!templates/controls/ProfileColumnTemplate.html" {
    const template: string;
    export = template;
}

declare module "dojo/text!templates/controls/ProfileSelectTemplate.html" {
    const template: string;
    export = template;
}

/* Need to redeclare the module here because for some reason TypeScript
    cannot detect this declaration in a higher folder 
*/
declare module "dojo/domReady!" {
    export default function();
}

/* 
declare module 'dojo/text!templates/EmployeeViewTemplate.html' {
  const template: string;
  export = template;
}
*/