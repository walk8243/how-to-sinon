import { fake, stub, SinonStub } from 'sinon';
import * as assert from 'assert';
import Class from '../src/Class';

describe('case2', () => {
  let c!: Class;
  let stubClassGetPrivate!: SinonStub;
  let stubClassGetProtected!: SinonStub;
  beforeEach(() => {
    c = new Class(10);
  });
  before(() => {
    stubClassGetPrivate = stub(Class.prototype, 'getPrivate' as any);
    stubClassGetProtected = stub(Class.prototype, 'getProtected' as any);
  });
  beforeEach(() => {
    stubClassGetPrivate.reset();
    stubClassGetProtected.reset();
    stubClassGetPrivate.callsFake(fake()).returns('dummy private');
    stubClassGetProtected.callsFake(fake()).returns('dummy protected');
  });
  after(() => {
    stubClassGetPrivate.restore();
    stubClassGetProtected.restore();
  });
  it('normal', () => {
    const result = c.getCase2();
    assert.deepEqual(result, { private: 'dummy private', protected: 'dummy protected' });

    // 呼び出し回数
    assert.ok(stubClassGetPrivate.calledOnce);
    assert.ok(stubClassGetProtected.calledOnce);

    // それぞれへのInの内容
    assert.deepEqual(stubClassGetPrivate.firstCall.args, []);
    assert.deepEqual(stubClassGetProtected.firstCall.args, []);
  });
});
