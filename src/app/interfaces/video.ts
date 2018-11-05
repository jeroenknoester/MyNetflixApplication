import { IGenre } from './genre';

export interface IVideo {
    id: number;
    data:string;
    url:string;
    title:string;
    description:string;
    genre:IGenre;
    rating:number;
}
