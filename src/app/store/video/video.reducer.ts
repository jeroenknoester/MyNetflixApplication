import { Video } from '../../shared/video.model';
import { VideoActionsUnion, VideosActionTypes } from './video.actions';
const initialState = [
    new Video(1, 'REDUX?', 'new', true)
];
export const videoReducer = (state = initialState, action: VideoActionsUnion) => {
    switch (action.type) {
        case VideosActionTypes.ADD:
            const newId = Math.max(...state.map(video => video.id)) + 1;
            return [
                ...state,
                new Video(newId, 'title', 'new', false)
            ];
        case VideosActionTypes.TOGGLE_STATUS:
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
        case VideosActionTypes.REMOVE:
            return state.filter(video => video.id !== action.videoId);
        default:
            return state;
    }
};
