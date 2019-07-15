import * as assert from 'assert';
import Class from '../src/Class';

describe('Class', () => {
  describe('constructor', () => {
    it('normal', () => {
      const testCases = [ 1, 10, 0 ];
      for(const testCase of testCases) {
        const c = new Class(testCase);
        assert.deepEqual(c, { index: testCase }, 'Error in `'+String(testCase)+'`');
      }
    });
  });

  describe('getCase1', () => {
    let c!: Class;
    beforeEach(() => {
      c = new Class(10);
    });
    it('normal', () => {
      const result = c.getCase1();
      assert.equal(result, 'Class');
    });
  });

  describe('getPrivate', () => {
    let c!: Class;
    beforeEach(() => {
      c = new Class(10);
    });
    it('normal', () => {
      const result = c['getPrivate']();
      assert.equal(result, 'getPrivate');
    });
  });
  describe('getProtected', () => {
    let c!: Class;
    beforeEach(() => {
      c = new Class(10);
    });
    it('normal', () => {
      const result = c['getProtected']();
      assert.equal(result, 'getProtected');
    });
  });
});
