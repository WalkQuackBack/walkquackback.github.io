import { persistentAtom } from '@nanostores/persistent'

export type Accent =
  'rosewater' |
  'flamingo' |
  'pink' |
  'mauve' |
  'red' |
  'maroon' |
  'peach' |
  'yellow' |
  'green' |
  'teal' |
  'sky' |
  'sapphire' |
  'blue' |
  'lavender'

export type Flavor =
  'latte' |
  'frappe' |
  'macchiato' |
  'mocha'

export const accent = persistentAtom('accent', "mauve" as Accent);
export const lightFlavor = persistentAtom<Flavor>('lightFlavor', "latte");
export const darkFlavor = persistentAtom<Flavor>('darkFlavor', "mocha");