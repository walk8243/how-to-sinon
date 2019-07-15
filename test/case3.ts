import * as assert from 'assert';
import Class from '../src/Class';

describe('case3', () => {
  let c!: Class;
  beforeEach(() => {
    c = new Class(10);
  });
  it('normal', () => {
    const dummyField = 'dummy field';
    assert.equal(c['field'], undefined);
    c.setField(dummyField);
    assert.equal(c['field'], dummyField);
    assert.equal(c.getField(), dummyField);
  });
});
