import sortByHP from '../sortingByHP';

const characterArray = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'некромант', health: 80 },
];

const characterArraySorted = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'некромант', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sorting works perfectly', () => {
  const sortedArray = sortByHP(characterArray);
  expect(sortedArray).toEqual(characterArraySorted);
});
