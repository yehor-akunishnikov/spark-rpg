export interface Character {
  name: string;
  stats: CharacterStats;
  // inventory: Item[];
  class: CHARACTER_CLASSES;
  race: CHARACTER_RACES;
  biography: string;
  icon?: string;
  id?: string;
}

export interface CharacterStats {
  strength: number,
  charisma: number,
  endurance: number,
  intelligence: number,
  agility: number,
  perception: number,
  luck: number
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
