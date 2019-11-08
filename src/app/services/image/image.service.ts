import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(private http: HttpClient) {}

  searchImage(query: string) {
    let API_KEY = environment.API_KEY;
    let CUSTOM_SEARCH = environment.CUSTOM_SEARCH;

    let url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CUSTOM_SEARCH}&q=${query}&searchType=image`;
    return this.http.get(url);
  }
}
