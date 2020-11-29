import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { searchResult } from '../interfaces/search-result.interface';

@Injectable()
export class SearchService {
    private algoliaApi: string = "http://hn.algolia.com/api/v1/";

     constructor(private httpClient: HttpClient) {}

     public searchAlgolia(query: string, page: string): Observable<searchResult> {
         return this.httpClient.get(`${this.algoliaApi}search`, {params: {query, page, tags: "story"}})
         .pipe(map((result: any) => result));
     }
}