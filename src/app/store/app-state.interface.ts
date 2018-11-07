import { Video } from '../shared/video.model';
import { Status } from './status/status.interface';

import { createFeatureSelector } from '@ngrx/store';

export interface IAppState {
//   filter: string;
  videos: Video[];
  status: Status;
}

export const statusSelector = createFeatureSelector<Status>('status');
