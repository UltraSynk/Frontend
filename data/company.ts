export const COMPANY = {
  brandName: 'UltraSynk',
  legalName: 'UltraSynk LLC',
  founderName: 'Freeman Howard',
  foundedDate: 'March 20, 2024',
  websiteUrl: 'https://ultrasynk.com/',
  websiteHost: 'ultrasynk.com',
  email: 'support@ultrasynk.com',
  phoneDisplay: '+1 (401) 259-8216',
  phoneTel: 'tel:+14012598216',
  address: {
    locality: 'San Francisco',
    street: '25 Taylor St, Suite 520',
    cityStateZip: 'San Francisco, CA 94102',
    country: 'USA',
  },
  addressSingleLine: '25 Taylor St, Suite 520, San Francisco, CA 94102, USA',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=25+Taylor+St+Suite+520+San+Francisco+CA+94102',
} as const

/** Legal pages — Company definition */
export const companyLegalBlurb =
  `${COMPANY.legalName} (doing business as ${COMPANY.brandName}), ` +
  `founded ${COMPANY.foundedDate}, with its principal office at ${COMPANY.addressSingleLine}.`
