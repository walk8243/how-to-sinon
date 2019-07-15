export default class Class {
  constructor(public index: number) {}

  getCase1() {
    return 'Class';
  }

  getCase2() {
    const case2 = {
      private: this.getPrivate(),
      protected: this.getProtected(),
    };
    return case2;
  }
  private getPrivate() {
    return 'getPrivate';
  }
  protected getProtected() {
    return 'getProtected';
  }
}
