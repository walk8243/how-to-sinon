import Class from './Class';

export default class Sub extends Class {
  constructor() {
    super(5);
  }

  setField(field: string) {
    field = field.trim();
    super.setField(field);
  }
}
