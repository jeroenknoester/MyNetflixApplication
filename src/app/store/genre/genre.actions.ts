// counter.actions.ts
import { Action } from '@ngrx/store';

export enum GenreActionTypes {
  SET = '[Genre] Set'
}

export class Set implements Action {
  public readonly type = GenreActionTypes.SET;

  constructor(public readonly genre: string) { }
}

export type GenreActionsUnion = Set;
