import { Injectable } from '@angular/core';
import { _HttpClient } from "@delon/theme";
import { Observable } from "rxjs/index";
import { Chen } from "./chen";

@Injectable({
  providedIn: 'root'
})
export class ChenService {

  api_chen='http://localhost:8080/sys/chen';
  constructor(private http: _HttpClient,
              private chen: Chen) { }

  /**
   * 测试接口
   * @returns {Observable<String>}
   */
  getChenInfo(): Observable<String> {
    return this.http.get(`${this.api_chen}/test`);
  }
}
