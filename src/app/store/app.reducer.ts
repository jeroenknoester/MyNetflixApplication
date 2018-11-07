import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';
import { videoReducer } from './video/video.reducer';
import { statusReducer } from './status/status.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
    //   filter: filterReducer,
    videos: videoReducer,
    status: statusReducer
};
