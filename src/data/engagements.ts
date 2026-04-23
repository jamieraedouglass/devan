export interface Engagement {
  title: string;
  organization: string;
  date: string;
  location?: string;
}

export const engagements: Engagement[] = [
  {
    title: 'AI: Should We Be Concerned?',
    organization: 'The Mortification of Spin Podcast',
    date: 'Jan 2026',
  },
  {
    title:
      "Implications of Pope Leo XIV's Election in an Age of AI — Moderator",
    organization: 'American Security Foundation & University of Notre Dame',
    date: 'May 2025',
  },
  {
    title:
      'Transhumanism, Effective Altruism, and Silicon Valley Ideology in the Age of AI',
    organization:
      'Center for Christian Virtue Essential Summit — 700+ Attendees',
    date: 'Oct 2025',
  },
  {
    title:
      'Protecting the Most Vulnerable: AI Policy Lessons from the US — Keynote',
    organization: 'CEPROME-Vatican Latin American Congress',
    date: 'Feb 2025',
    location: 'Lima, Peru',
  },
  {
    title: 'Family Security as a Matter of (Inter)National Security — Keynote',
    organization: 'CEPROME-Vatican Latin American Congress',
    date: 'Feb 2025',
    location: 'Lima, Peru',
  },
  {
    title: 'Ethics in AI Award Dinner — Convener',
    organization:
      'Washington, D.C. — Multiple Supreme Court Justices, Appellate Judges, Lawmakers',
    date: '2024',
  },
  {
    title: 'Vatican Ethics in AI Summit — Convener',
    organization:
      'Rome, Italy — 40+ Global Faith Leaders, Military Officials, Industry Figures',
    date: '2024',
    location: 'Rome, Italy',
  },
  {
    title: 'Federalist Society AI & Law Symposium — Organizer',
    organization: 'Federalist Society for Law and Public Policy',
    date: '2024–25',
  },
];
