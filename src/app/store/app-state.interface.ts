import { Video } from '../shared/models/video.model';

export interface IAppState {
  filter: string;
  videos: Video[];
}
