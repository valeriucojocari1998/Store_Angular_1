export class InputType {
  type: string = '';
  id: string = '';
  placeholder: string = '';
  class: string = '';
  formControlName: string = '';

  constructor(type: string, id:string, placeholder:string, classval: string, formControlName: string) {
    this.type = type;
    this.id = id;
    this.placeholder = placeholder;
    this.class = classval;
    this.formControlName = formControlName;
  }
}
