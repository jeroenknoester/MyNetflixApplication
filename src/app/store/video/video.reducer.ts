import { Video } from '../../shared/video.model';
import { VideoActionsUnion, VideoActionTypes } from './video.actions';
const initialState = [];
export const videoReducer = (state = initialState, action: VideoActionsUnion) => {
    switch (action.type) {
        case VideoActionTypes.GETALL_SUCCESS:
            return action.videos;

        case VideoActionTypes.ADD:
            const newId = Math.max(...state.map(video => video.id)) + 1;
            return [
                ...state,
                // new Video(newId, 'title', 'new', false)
            ];
        case VideoActionTypes.TOGGLE_STATUS:
            return [
                ...state.map(video => {
                    if (video.id !== action.videoId) {
                        return video;
                    }
                    return {
                        ...video,
                        status: video.watched === false ? true : false
                    };
                })
            ];
        case VideoActionTypes.REMOVE:
            return state.filter(video => video.id !== action.videoId);
        default:
            return state;
    }
};
