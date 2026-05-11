// Each publication row.
//
// `project` is a string:
//   - If it matches a slug in projects.js, the row gets the project's
//     colour styling and a hover image.
//   - If it doesn't match (e.g. 'Office Profile', 'Parts of Practice'),
//     the row renders as plain text with no hover image.
//
// `url` (optional) — when present, the row is an external link with
//   target="_blank". When absent and project matches a slug, the row
//   links internally to /projects/{slug}. When neither, plain text.
//
// `label` (optional) overrides the displayed project title.

export const publications = [
    { year: 2026, publisher: 'Architecture, AU',          issue: 'Online',     project: 'ALightAddition',    url: 'https://architectureau.com/articles/a-light-addition-by-office-miji/' },
    { year: 2025, publisher: 'Union Magazine',            issue: 'Online',     project: 'Parts of Practice', url: 'https://unionmagazine.com/the-patchwork/' },
    { year: 2025, publisher: 'Office Dave Sharp Podcast', issue: '21 January', project: 'Office Profile',    url: 'https://open.spotify.com/episode/2poJoGmYOG647ZKbUcqckZ?si=W9nrHM49S4GYCNWQR_PPrg' },
    { year: 2024, publisher: 'Houses Magazine',           issue: 'Issue 157',  project: 'ARenovationForThree' },
    { year: 2024, publisher: 'Revista PLOT',              issue: 'Issue 71',   project: 'ABHouse', label: 'Office Profile/AB House' },
    { year: 2023, publisher: 'Grand Designs Australia',   issue: 'Issue 123',  project: 'ABHouse' },
    { year: 2023, publisher: 'Architectural Record',      issue: 'Issue 06',   project: 'Office Profile' },
    { year: 2023, publisher: 'Artichoke',                 issue: 'Issue 82',   project: 'Office Profile' },
    { year: 2023, publisher: 'Houses Magazine',           issue: 'Issue 149',  project: 'ABHouse' },
    { year: 2023, publisher: 'Domus Web',                 issue: '',           project: 'ABHouse' },
    { year: 2022, publisher: "I\u2019m Home",             issue: 'Issue 120',  project: 'ABHouse' },
    { year: 2022, publisher: 'Divisare',                  issue: '',           project: 'ABHouse' },
    { year: 2022, publisher: 'Divisare',                  issue: '',           project: 'AHouseForOne' },
    { year: 2021, publisher: 'The Commercial Project',    issue: 'Issue 01',   project: 'APavilion' },
    { year: 2021, publisher: 'Designboom',                issue: '',           project: 'APavilion' },
];