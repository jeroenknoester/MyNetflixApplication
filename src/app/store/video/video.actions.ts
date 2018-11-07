import { Action } from '@ngrx/store';
import { Video } from 'src/app/shared/video.model';

export enum VideoActionTypes {
    GETALL = '[Message] GetAll',
    GETALL_SUCCESS = '[Message] GetAll Success',
    GETALL_ERROR = '[Message] GetAll Error',
    ADD = '[Message] Add',
    TOGGLE_STATUS = '[Message] ToggleStatus',
    REMOVE = '[Message] Remove'
}

export class GetAll implements Action {
    public readonly type = VideoActionTypes.GETALL;

    constructor() { }
}

export class GetAllSuccess implements Action {
    public readonly type = VideoActionTypes.GETALL_SUCCESS;

    constructor(public readonly videos: Video[]) { }
}

export class GetAllError implements Action {
    public readonly type = VideoActionTypes.GETALL_ERROR;

    constructor() { }
}



export class Add implements Action {
    public readonly type = VideoActionTypes.ADD;

    constructor(public readonly video: string) { }
}

export class ToggleStatus implements Action {
    public readonly type = VideoActionTypes.TOGGLE_STATUS;

    constructor(public readonly videoId: number) { }
}

export class Remove implements Action {
    public readonly type = VideoActionTypes.REMOVE;

    constructor(public readonly videoId: number) { }
}

export type VideoActionsUnion = GetAllSuccess | GetAllError | GetAll | Add | ToggleStatus | Remove;
