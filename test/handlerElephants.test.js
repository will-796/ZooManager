const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se a função getElephants retorna undefined se nenhum parametro foi aplicado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('se nao existe o parametro passado no objeto elephant retorna null', () => {
    expect(handlerElephants('xablau')).toBeNull();
  });
  it('testa se a função getElephants retorna uma string se o parametro for diferente de uma string', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('testa se a função getElephants com o parametro count retorna o esperado', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testa se a função getElephants com o parametro names retorna o esperado', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('testa se a função getElephants com o parametro averageAge retorna o esperado', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('testa se a função getElephants com o parametro id retorna o esperado', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('testa se a função getElephants com o parametro location retorna o esperado', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
