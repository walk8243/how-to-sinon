import * as assert from 'assert';
import Class from '../src/Class';

describe('Class', () => {
  describe('constructor', () => {
    it('normal', () => {
      const testCases = [ 1, 10, 0 ];
      for(const testCase of testCases) {
        const c = new Class(testCase);
        assert.equal(c.index, testCase, 'Error in `'+String(testCase)+'`');
      }
    });
  });

  describe('get', () => {
    let c!: Class;
    beforeEach(() => {
      c = new Class(10);
    });
    it('normal', () => {
      assert.equal(c.getCase1(), 'Class');
    });
  });
});
