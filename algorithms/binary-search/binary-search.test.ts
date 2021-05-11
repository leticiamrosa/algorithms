import faker from 'faker'
import { binarySearch } from './binary-search';

interface Sut {
  list: Array<string>;
}


const sut = (element?: string): Sut => {
  const hasElement = element ? element : faker.music.genre();
  const list = [
    faker.music.genre(),
    faker.music.genre(),
    faker.music.genre(),
    faker.music.genre(),
    faker.music.genre(),
    hasElement,
  ];

  return {
    list,
  }
};

describe('binarySearch', (): void => {
  it('should return the element index when the list has the element', (): void => {
    // given
    const element = faker.music.genre();
    const { list } = sut(element);

    // when
    const result = binarySearch(list, element)

    // then
    expect(result).toEqual(list.indexOf((element)));

  });

  it('should return -1 when the list hasnt the element', (): void => {
    // given
    const { list } = sut();
    const element = 'Apple';

    // when
    const result = binarySearch(list, element)

    // then
    expect(result).toEqual(list.indexOf((element)));
  });
});
