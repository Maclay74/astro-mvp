import { atom } from 'nanostores'


export const name = atom<string>("Unknown");


export const setName = (newName: string) => name.set(newName);