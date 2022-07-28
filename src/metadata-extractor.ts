import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import { normalizeName } from './helper';
import { DynamicKeys, MetadataInformation } from './metadata';

export async function extractMetadata(
  url: string,
  ...additionalFields: string[]
): Promise<MetadataInformation> {
  try {
    const cleanedUri = url.trim();
    const response = await fetch(cleanedUri);
    const content = await response.text();

    const $ = cheerio.load(content);
    const head = $('head');
    const title = head.find('title').text();
    const description =
      head.find('meta[name=description]').attr('content') || '';
    const banner =
      head.find('meta[name="og:image"]').attr('content') ||
      head.find('meta[property="og:image"]').attr('content');
    const color = head.find('meta[name="theme-color"]').attr('content');
    const isItWordpress = head.find('meta[name=generator]').attr('content')
      ? true
      : false;
    const wordpressVersion = head.find('meta[name=generator]').attr('content');
    const metaResponse: MetadataInformation = {
      title,
      description,
      banner,
      color,
      isItWordpress,
      wordpressVersion
    };

    if (additionalFields.length > 0) {
      additionalFields = additionalFields.map((ad) =>
        ad.indexOf('og:') > -1 ? ad.substring(3) : ad
      );
      metaResponse.additional = readExtraFields(head, ...additionalFields);
    }

    Object.keys(metaResponse).forEach((key) => {
      if (!metaResponse[key as keyof MetadataInformation]) {
        delete metaResponse[key as keyof MetadataInformation];
      }
    });
    return metaResponse;
  } catch (ex) {
    throw ex;
  }
}

function readExtraFields(
  head: cheerio.Cheerio<cheerio.Element>,
  ...metaFields: string[]
): DynamicKeys {
  let response: DynamicKeys = {};
  metaFields.map((m) => {
    const field = m;
    let fieldValue = '';
    if (field.indexOf('og:') > -1) {
      fieldValue =
        head.find(`meta[name="${field}"]`).attr('content') ||
        head.find(`meta[property="${field}"]`).attr('content') ||
        '';
    } else if (field.indexOf('og:') < 0) {
      fieldValue =
        head.find(`meta[name="og:${field}"]`).attr('content') ||
        head.find(`meta[property="og:${field}"]`).attr('content') ||
        '';
    }
    if (!fieldValue) {
      fieldValue =
        head.find(`meta[name="${field}"]`).attr('content') ||
        head.find(`meta[property="${field}"]`).attr('content') ||
        '';
    }
    head.find(`meta[name="og:${field}"]`).attr('content') ||
      head.find(`meta[property="og:${field}"]`).attr('content');

    const normalizedField = normalizeName(field);

    response[normalizedField] = fieldValue || '';
  });

  return response;
}
