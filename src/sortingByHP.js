export default function sortByHP(array) {
  array.sort((firstHealth, secondHealth) => {
    if (firstHealth.health < secondHealth.health) {
      return 1;
    } if (firstHealth.health > secondHealth.health) {
      return -1;
    }
    return 0;
  });
  return array;
}
