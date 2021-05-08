import {containsDuplicates, containsDuplicatesV2 } from './index';

describe('Contains Duplicates', () => {
  describe('containsDuplicates', () => {
    it('should return the true when there is contains duplicate itens', () => {

      // then
      expect(containsDuplicates([1, 0, 1, -1])).toBeTruthy()
      expect(containsDuplicates([1, 0, 1, 3])).toBeTruthy()
    });

    it('should return the false when there isnt contains duplicate itens', () => {

      // then
      expect(containsDuplicates([1, 9, 3, -1])).toBeFalsy()
      expect(containsDuplicates([1, 5, 0, 3])).toBeFalsy()
    });
  });
});