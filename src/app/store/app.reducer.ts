import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';

// import { genreReducer } from './filter/filter.reducer';
import { videoReducer } from './videos/videos.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
//   filter: filterReducer,
  videos: videoReducer  
};
