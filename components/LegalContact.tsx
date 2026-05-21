import { COMPANY } from '../data/company'

export function LegalContactList() {
  return (
    <ul>
      <li>
        By email:{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </li>
      <li>
        By phone: <a href={COMPANY.phoneTel}>{COMPANY.phoneDisplay}</a>
      </li>
      <li>
        By mail: {COMPANY.legalName}, {COMPANY.addressSingleLine}
      </li>
      <li>
        Website:{' '}
        <a href={COMPANY.websiteUrl} target="_blank" rel="noopener noreferrer">
          {COMPANY.websiteHost}
        </a>
      </li>
    </ul>
  )
}
