describe('Main', function(){
  before(()=>{
    console.log('before');
  });

  after(()=>{
    console.log('after');
  });

  beforeEach(()=>{
    console.log('before each');
  });

  afterEach(()=>{
    console.log('after each');
  });

  it('teste 1', () => {
    console.log('test 1');
  });

  it('teste 2', () => {
    console.log('test 2');
  });

  it('teste 3', () => {
    console.log('test 3');
  });
});
