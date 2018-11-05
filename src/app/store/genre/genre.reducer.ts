import { GenreActionsUnion, GenreActionTypes } from './genre.actions';

export const genreReducer = (state = 'all', action: GenreActionsUnion) => {
  switch (action.type) {
    case GenreActionTypes.SET:
      return action.genre;
    default:
      return state;
  }
};
