import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(private http: HttpClient) {}

  searchImage(query: string) {
    let API_KEY = "AIzaSyDYrtt9b1pGLAXaIFjCg0j3jJM69psThpA";
    let CUSTOM_SEARCH = "007154125892365797576:2lofwdhqh8v";

    let url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CUSTOM_SEARCH}&q=${query}&searchType=image`;
    return this.http.get(url);
  }
}
