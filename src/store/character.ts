import { defineStore } from 'pinia'
import { BodyBack, Character, StatKeys, DescriptionKeys, PackBack } from '../types'

export const useStore = defineStore('character', {
  state: (): Character => ({
    name: '',
    exp: 0,
    maxStr: 0,
    str: 0,
    maxDex: 0,
    dex: 0,
    maxWil: 0,
    wil: 0,
    maxHp: 0,
    hp: 0,
    startPips: 0,
    pips: 0,
    background: '',
    bodyBack: {
        'Main Paw': {
          name: 'Main Paw',
          item: null
        },
        'Main Body': {
          name: 'Main Body',
          item: null
        },
        'Second Paw': {
          name: 'Second Paw',
          item: null
        },
        'Second Body': {
          name: 'Second Body',
          item: null
        }
    },
    packBack: {
        1: {
          name: '1',
          item: null
        },
        2: {
          name: '2',
          item: null
        },
        3: {
          name: '3',
          item: null
        },
        4: {
          name: '4',
          item: null
        },
        5: {
          name: '5',
          item: null
        },
        6: {
          name: '6',
          item: null
        },
    },
    birthSign: '',
    coat: '',
    details: '',
    grit: 0
  }),
  actions: {
    setStat(statName: StatKeys, payload: number) {
      this[statName] = payload
    },
    setDescription(descName: DescriptionKeys, payload: string) {
      this[descName] = payload
    },
    updateItems(packName: 'bodyBack' | 'packBack', payload: BodyBack | PackBack) {
      this[packName] = payload
    }
  }
})