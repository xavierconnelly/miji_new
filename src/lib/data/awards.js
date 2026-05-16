// Each award row.
//
// `project` is a string:
//   - If it matches a slug in projects.js, the row becomes a link to that
//     project page and the hover image appears.
//   - If it doesn't match (e.g. 'Office Award'), the row renders as plain
//     text with no link and no hover.
//
// `label` (optional) overrides the displayed project title — useful when
// you want custom text but still want the slug-based hover/link behaviour.

export const awards = [
    { year: 2026, type: 'S', award: 'New House',                        awarder: 'AIA Vic Awards',                    project: 'ACourtyardHouse' },
    { year: 2025, type: 'C', award: 'Houses (Alts & Ads)',              awarder: 'AIA Vic Awards',                    project: 'ALightAddition' },
    { year: 2024, type: 'C', award: 'House of the Year (Large)',        awarder: 'Grand Designs Australia',           project: 'ABHouse' },
    { year: 2023, type: 'W', award: 'Emerging Designer',                awarder: 'The Local Project',                 project: 'ABHouse' },
    { year: 2023, type: 'W', award: 'Design Vanguard',                  awarder: 'Architectural Record',              project: 'Office Award' },
    { year: 2023, type: 'W', award: 'Colorbond Steel',                  awarder: 'AIA National Awards',               project: 'ABHouse' },
    { year: 2023, type: 'W', award: 'EmAGN',                            awarder: 'AIA Vic Awards',                    project: 'ABHouse' },
    { year: 2023, type: 'W', award: 'Colorbond Steel',                  awarder: 'AIA Vic Awards',                    project: 'ABHouse' },
    { year: 2023, type: 'C', award: 'New House',                        awarder: 'AIA Vic Awards',                    project: 'ABHouse' },
    { year: 2023, type: 'W', award: 'Architectural Design',             awarder: 'Good Design Awards',                project: 'ABHouse' },
    { year: 2023, type: 'C', award: 'Emerging Architecture Practice',   awarder: 'Houses Awards',                     project: 'Office Award' },
    { year: 2023, type: 'S', award: 'New Houses over 200m2',            awarder: 'Houses Awards',                     project: 'ABHouse' },
    { year: 2023, type: 'N', award: 'Building of the Year Residential', awarder: 'ArchDaily',                         project: 'ABHouse' },
    { year: 2023, type: 'S', award: 'New Houses over 200m2',            awarder: 'Australian Interior Design Awards', project: 'ABHouse' },
    { year: 2023, type: 'F', award: 'Residential Interior',             awarder: 'Dulux Colour Awards',               project: 'ABHouse' },
];