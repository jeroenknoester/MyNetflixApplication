import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVideo } from 'src/app/interfaces/video';
import { Observable } from 'rxjs';
import { Video } from 'src/app/shared/video.model';

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  constructor(private http: HttpClient) { }

  videoUrl = 'http://localhost:8080/api/videos';

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*'
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videoUrl, this.requestOptions);
  }
}
