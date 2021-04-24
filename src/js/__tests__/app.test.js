import Team from '../app';

test('Должен добавлять нового персонажа', () => {
  const team = new Team();
  const character = { name: 'Name', type: 'Bowman' };
  expect(team.members.size).toBe(0);
  team.add(character);
  expect(team.members.size).toBe(1);
  expect(() => team.add(character)).toThrowError('Такой персонаж уже существует');
  expect(team.members.size).toBe(1);
});
test('Должен добавить несколько персонажей', () => {
  const team = new Team();
  team.addAll({ name: 'Name', type: 'Bowman' }, { name: 'Name1', type: 'Swordsman' }, { name: 'Name2', type: 'Daemon' });
  expect(team.members.size).toBe(3);
});
test('Должен конвертировать в массив', () => {
  const team = new Team();
  team.addAll({ name: 'Name', type: 'Bowman' }, { name: 'Name1', type: 'Swordsman' }, { name: 'Name2', type: 'Daemon' });
  expect(team.members.size).toBe(3);
  expect(team.toArray().length).toBe(3);
});
