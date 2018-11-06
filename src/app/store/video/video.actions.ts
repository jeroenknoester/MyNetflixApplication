import { Action } from '@ngrx/store';

export enum VideosActionTypes {
    ADD = '[Message] Add',
    TOGGLE_STATUS = '[Message] ToggleStatus',
    REMOVE = '[Message] Remove'
}

export class Add implements Action {
    public readonly type = VideosActionTypes.ADD;

    constructor(public readonly video: string) { }
}

export class ToggleStatus implements Action {
    public readonly type = VideosActionTypes.TOGGLE_STATUS;

    constructor(public readonly videoId: number) { }
}

export class Remove implements Action {
    public readonly type = VideosActionTypes.REMOVE;

    constructor(public readonly videoId: number) { }
}

export type VideoActionsUnion = Add | ToggleStatus | Remove;
