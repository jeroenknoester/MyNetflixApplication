import { Status } from './status.interface';
import { VideoActionsUnion, VideoActionTypes } from '../video/video.actions';

const initialState = <Status>{};

export const statusReducer = (state = initialState, action: VideoActionsUnion): Status => {
    switch (action.type) {
        case VideoActionTypes.GETALL_ERROR:
            return {
                ...state,
                movieLoadError: true
            };
        case VideoActionTypes.GETALL_SUCCESS:
            return {
                ...state,
                movieLoadError: false
            };
        // return state;
        default:
        return state;
    }
}