import { fake } from 'sinon';
import * as assert from 'assert';
import Sub from '../src/Sub';

describe('case4', () => {
  const fakeOriginConstructor = fake();
  before(() => {
    Object.setPrototypeOf(Sub, fakeOriginConstructor);
  });
  beforeEach(() => {
    fakeOriginConstructor.resetHistory();
  });
  after(() => {
    delete require.cache[require.resolve('../src/Sub.ts')];
  });
  it('normal', () => {
    const s = new Sub();
    assert.deepEqual(Object.keys(s), []);
    assert.ok(fakeOriginConstructor.calledOnce);
    assert.deepEqual(fakeOriginConstructor.firstCall.args, [ 5 ]);
  });
});
