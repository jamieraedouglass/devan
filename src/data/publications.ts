export type PublicationType =
  | 'podcast'
  | 'keynote'
  | 'declaration'
  | 'amicus'
  | 'journal'
  | 'oped'
  | 'panel'
  | 'senate';

export type PublicationCategory =
  | 'ai-ethics'
  | 'law'
  | 'faith';

export interface Publication {
  title: string;
  type: PublicationType;
  venue?: string;
  date: string;
  categories: PublicationCategory[];
  url?: string;
}

export const publications: Publication[] = [
  // AI & Ethics
  {
    title: 'A Catholic Response to "The Adolescence of Technology"',
    type: 'podcast',
    venue: 'The Catholic Futurist Podcast',
    date: 'Forthcoming',
    categories: ['ai-ethics', 'faith'],
  },
  {
    title: 'AI: Should We Be Concerned?',
    type: 'podcast',
    venue: 'The Mortification of Spin Podcast',
    date: 'January 14, 2026',
    categories: ['ai-ethics', 'faith'],
  },
  {
    title: 'Joint Statement on AI Ethics — Lead Drafter & Invited Signatory',
    type: 'declaration',
    date: 'October 22, 2025',
    categories: ['ai-ethics', 'faith'],
  },
  {
    title: 'Statement on Superintelligence — Invited Signatory',
    type: 'declaration',
    date: 'October 2025',
    categories: ['ai-ethics'],
  },
  {
    title: 'Transhumanism, Effective Altruism, and Silicon Valley Ideology in the Age of AI',
    type: 'keynote',
    venue: 'Center for Christian Virtue Essential Summit (700+ evangelical leaders)',
    date: 'October 2, 2025',
    categories: ['ai-ethics', 'faith'],
  },
  {
    title: "Implications of Pope Leo XIV's Election in an Age of AI — Moderator",
    type: 'panel',
    venue: 'American Security Foundation & University of Notre Dame',
    date: 'May 20, 2025',
    categories: ['ai-ethics', 'faith'],
  },
  {
    title: "National Declaration on AI and Kids' Safety — Invited Signatory",
    type: 'declaration',
    date: 'May 12, 2025',
    categories: ['ai-ethics'],
  },
  {
    title: 'Protecting the Most Vulnerable: AI Policy Lessons from the US',
    type: 'keynote',
    venue: '2025 CEPROME-Vatican Latin American Congress · Lima, Peru',
    date: 'February 2025',
    categories: ['ai-ethics', 'faith'],
  },
  {
    title: "Why Trump and Harris Must Abandon the CCP's Digital Playground",
    type: 'oped',
    venue: 'RealClearPolitics',
    date: 'October 23, 2024',
    categories: ['ai-ethics'],
  },
  {
    title: 'Ban TikTok Today',
    type: 'oped',
    venue: 'RealClearPolicy',
    date: 'April 25, 2024',
    categories: ['ai-ethics'],
  },

  // Law & Constitutional Order
  {
    title: 'Brief of American Unity Fund and EPPC as Amici Curiae',
    type: 'amicus',
    venue: 'Kathy Chiles v. Patty Salazar, No. 24-539',
    date: 'June 13, 2025',
    categories: ['law'],
  },
  {
    title: 'Brief for Prof. Dale Carpenter et al. as Amici Curiae Supporting Petitioners',
    type: 'amicus',
    venue: '303 Creative LLC v. Elenis, No. 21-476',
    date: 'May 31, 2022',
    categories: ['law'],
  },
  {
    title: 'The Dogma Within? Testing the Role of Religion in Statutory Decision-Making',
    type: 'journal',
    venue: 'Journal of Empirical Legal Studies, Vol. 18, p. 742 · With Matthew Dahl & Matthew E.K. Hall',
    date: '2021',
    categories: ['law', 'faith'],
  },
  {
    title: 'Letter of Former Student Devan Patel — Amy Coney Barrett Nomination',
    type: 'senate',
    venue: 'Read into U.S. Senate Record by Sen. Tillis',
    date: 'October 13, 2020',
    categories: ['law'],
  },
  {
    title: 'The Indefensible "Gay Panic Defense"',
    type: 'journal',
    venue: 'Journal of Legislation, Vol. 46, p. 114',
    date: '2019',
    categories: ['law'],
  },
  {
    title: "What's the Beef? Missouri's Attempt to Silence Speech About Veggie Burgers",
    type: 'oped',
    venue: 'The Hill',
    date: 'August 6, 2018',
    categories: ['law'],
  },
];

export const TAG_COLORS: Record<PublicationType, string> = {
  podcast:     '#4A3060',
  keynote:     '#2C3E5D',
  panel:       '#2C3E5D',
  declaration: '#6B2737',
  amicus:      '#4A4A2F',
  journal:     '#1E3A2F',
  oped:        '#7A4020',
  senate:      '#444444',
};