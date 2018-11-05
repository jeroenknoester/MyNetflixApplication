import { Video } from '../../shared/models/video.model';
import { VideoActionsUnion, VideosActionTypes } from './videos.actions';

const initialState = [
  new Video(1, 'The Shawshank Redemption', 'drama'),
  new Video(2, 'Scream', 'horror'),
  new Video(3, 'Schindlers list', 'drama'),
  new Video(4, 'The lord of the ring: the two towers', 'adventure')
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
    // case VideosActionTypes.REMOVE:
    //   return state.filter(video => video.id !== action.messageId);
    default:
      return state;
  }
};
