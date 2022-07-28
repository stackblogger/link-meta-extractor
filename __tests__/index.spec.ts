import { normalizeName } from '../src/helper';
import { MetadataInformation } from '../src/metadata';
import { extractMetadata } from '../src';

describe('LinkMetaExtractor-Test', () => {
  it('should contain the metadata information for the provided url', (done) => {
    extractMetadata('https://stackblogger.com').then((metaInformatin) => {
      expect(metaInformatin).toHaveProperty('title');
      expect(metaInformatin).toHaveProperty('description');
      expect(metaInformatin).toMatchObject<MetadataInformation>(metaInformatin);
      done();
    });
  });

  it('should contain the extra metadata fields for the provided url', (done) => {
    extractMetadata(
      'https://stackblogger.com',
      'twitter:site',
      'twitter:card',
      'robots'
    ).then((metaInformatin) => {
      expect(metaInformatin).toHaveProperty('title');
      expect(metaInformatin).toHaveProperty('description');
      expect(metaInformatin.extraFields).toHaveProperty(
        normalizeName('twitter:site')
      );
      expect(metaInformatin.extraFields).toHaveProperty(
        normalizeName('twitter:card')
      );
      expect(metaInformatin.extraFields).toHaveProperty('robots');
      expect(metaInformatin).toMatchObject<MetadataInformation>(metaInformatin);
      done();
    });
  });
});
