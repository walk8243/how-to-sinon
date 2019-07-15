import { fake, stub, SinonStub } from 'sinon';
import * as assert from 'assert';
import Sub from '../src/Sub';
import Class from '../src/Class';

describe('case5', () => {
  let s!: Sub;
  let stubClassSetField!: SinonStub;
  beforeEach(() => {
    s = new Sub();
  });
  before(() => {
    stubClassSetField = stub(Class.prototype, 'setField');
  });
  beforeEach(() => {
    stubClassSetField.reset();
    stubClassSetField.callsFake(fake());
  });
  after(() => {
    stubClassSetField.restore();
  });
  it('No spaces before or after', () => {
    s.setField('dummy field');
    assert.ok(stubClassSetField.calledOnce);
    assert.deepEqual(stubClassSetField.firstCall.args, [ 'dummy field' ]);
  });
  it('spaces before or after', () => {
    s.setField(' dummy field ');
    assert.ok(stubClassSetField.calledOnce);
    assert.deepEqual(stubClassSetField.firstCall.args, [ 'dummy field' ]);
  });
});
