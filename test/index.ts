import { fake, stub, SinonStub } from 'sinon';
import * as assert from 'assert';
import { case1 } from '../src/index';
import * as Class from '../src/Class';

describe('case1', () => {
  let stubClassConstructor!: SinonStub;
  let stubClassGet!: SinonStub;
  const dummyClass = new Class.default(10);
  before(() => {
    stubClassConstructor = stub(Class, 'default');
    stubClassGet = stub(dummyClass, 'get');
  });
  beforeEach(() => {
    stubClassConstructor.reset();
    stubClassGet.reset();
    stubClassConstructor.callsFake(fake()).returns(dummyClass);
    stubClassGet.callsFake(fake()).returns('stub');
  });
  after(() => {
    stubClassConstructor.restore();
    stubClassGet.restore();
  });
  it('normal', () => {
    const result = case1();
    assert.equal(result, 'stub');

    // 呼び出し回数
    assert.ok(stubClassConstructor.calledOnce);
    assert.ok(stubClassGet.calledOnce);

    // 呼び出し順序
    assert.ok(stubClassGet.calledAfter(stubClassConstructor));

    // それぞれへのInの内容
    assert.deepEqual(stubClassConstructor.firstCall.args, [ 1 ]);
    assert.deepEqual(stubClassGet.firstCall.args, []);
  });
});
