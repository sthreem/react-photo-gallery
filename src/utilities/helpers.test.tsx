import { mockPhoto } from '@/test-utils/mocks';
import { Photo } from '@/types';
import helpers from '@/utilities/helpers';

describe('helpers', () => {
  describe('sortByCreatedAt', () => {
    it('returns an empty array when photos is empty', () => {
      expect(helpers.sortByCreatedAt([])).toEqual([]);
    });

    it('returns photos sorted by createdAt property', () => {
      const photosMock: Photo[] = [
        { ...mockPhoto, id: '1', createdAt: '2022-03-02T12:00:00.000Z' },
        { ...mockPhoto, id: '2', createdAt: '2022-03-01T12:00:00.000Z' },
      ];
      expect(helpers.sortByCreatedAt(photosMock)).toEqual([
        { ...mockPhoto, id: '1', createdAt: '2022-03-02T12:00:00.000Z' },
        { ...mockPhoto, id: '2', createdAt: '2022-03-01T12:00:00.000Z' },
      ]);
    });
  });

  describe('convertPhotoSize', () => {
    it('returns an empty object when photos is empty', () => {
      expect(helpers.convertPhotoSize([])).toEqual({});
    });

    it('returns a hash map with photo.id as key and size in MB as value', () => {
      const photosMock: Photo[] = [
        { ...mockPhoto, id: '1', sizeInBytes: 5242880 },
        { ...mockPhoto, id: '2', sizeInBytes: 10485760 },
      ];
      expect(helpers.convertPhotoSize(photosMock)).toEqual({
        '1': '5.0 MB',
        '2': '10.0 MB',
      });
    });
  });

  describe('extractInfoToDisplay', () => {
    it('returns an empty array when photo is null', () => {
      expect(helpers.extractInfoToDisplay(null)).toEqual([]);
    });

    it('returns an array of info to display about the photo', () => {
      expect(helpers.extractInfoToDisplay(mockPhoto)).toEqual([
        { key: 'Uploaded by', value: 'uploadedBy' },
        { key: 'Created', value: 'July 15, 2017' },
        { key: 'Last modified', value: 'December 16, 2022' },
        { key: 'Dimensions', value: '100 x 100' },
        { key: 'Resolution', value: '100 x 100' },
      ]);
    });
  });
});
