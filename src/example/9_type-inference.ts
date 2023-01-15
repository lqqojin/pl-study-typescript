const a = 'a';

function logA(a = 'a') {
  const b = 10;
  return b;
}

interface Dropdown<T> {
  value: T;
  title: string;
}
const items: Dropdown<number> = {
  value: 10,
  title: 'a',
};

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
const detailItems: DetailedDropdown<number> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c',
};
