import { Video } from '../../shared/models/video.model';
import { VideoActionsUnion, VideosActionTypes } from './videos.actions';

const initialState = [
  new Video(1, 'REDUX?', 'new'),
  new Video(2, 'RXJS?', 'new'),
  new Video(3, 'NGRX?', 'new')
];

export const videoReducer = (state = initialState, action: VideoActionsUnion) => {
  switch (action.type) {
    case VideosActionTypes.ADD:
      const newId = Math.max(...state.map(video => video.id)) + 1;
      return [
        ...state,
        new Video(newId, action.message, 'new')
      ];
    case VideosActionTypes.TOGGLE_STATUS:
      return [
        ...state.map(video => {
          if (video.id !== action.messageId) {
            return video;
          }
          return {
            ...video,
            status: video.status === 'new' ? 'read' : 'new'
          };
        })
      ];
    case VideosActionTypes.REMOVE:
      return state.filter(video => video.id !== action.messageId);
    default:
      return state;
  }
};
