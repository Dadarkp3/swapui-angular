import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { People } from "src/app/models/People";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  searchpPeople(query: string): Observable<any> {
    return this.http.get<any>(query);
  }
}
