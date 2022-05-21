const getOpeningHours = require('../src/getOpeningHours');

const expected = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('testa se as segundas feiras o zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('testa se as segundas feiras o zoo está fechado se é PM', () => {
    expect(getOpeningHours('friday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('testa se dado um horario o zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('testa se joga um erro caso o dia não seja valido', () => {
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('testa se joga um erro caso a abreviação nao for correta', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('testa se joga um erro caso as horas nao sejam numeros', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('testa se joga um erro caso os minutos nao sejam numeros', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('testa se joga um erro caso os minutos sejam maior que 60', () => {
    expect(() => getOpeningHours('Sunday', '09:70-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('testa se joga um erro caso as horas sejam maior que 12', () => {
    expect(() => getOpeningHours('Sunday', '29:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('testa se passado nenhum parametro retorna um objeto com todos os horarios', () => {
    expect(getOpeningHours()).toEqual(expected);
  });
});
