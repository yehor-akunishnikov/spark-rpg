export interface Character {
  creator: string;
  name: string;
  stats: Record<string, number>;
  inventory: Item[];
  class: CHARACTER_CLASSES;
  race: CHARACTER_RACES;
  biography: string;
  icon?: string;
}

export interface Item {
  name: string;
  description: string;
  statEffects: Record<string, number>;
  specialAbilities: ItemSpecialAbility[];
}

export interface ItemSpecialAbility {
  name: string;
  description: string;
}

export enum CHARACTER_RACES {
  HUMAN = 'Human',
  DWARF = 'Dwarf',
  ELF = 'Elf',
  UNDEAD = 'Undead',
  ARACHNID = 'Arachnid',
}

export enum CHARACTER_CLASSES {
  BLACKSMITH = 'Blacksmith',
  WARRIOR = 'Warrior',
  THIEF = 'Thief',
  ASSASSIN = 'Assassin',
  TRADER = 'Trader',
  BARD = 'Bard',
}
