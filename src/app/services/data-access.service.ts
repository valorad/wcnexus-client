import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParamsOptions, HttpResponse } from '@angular/common/http';
import { map, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ICUDMessage } from '../models/interfaces/cud-message.interface';

/**
 * Check the full type description at
 * https://angular.io/api/common/http/HttpClient#get
 */
interface HttpOption {
  headers?: any,
  context?: HttpContext,
  observe?: any,
  params?: any,
  reportProgress?: boolean,
  responseType?: any,
  withCredentials?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  getFullResponse = <T>(endpoint: string, options: HttpOption = {}): Observable<HttpResponse<T>> => 
    this.http.get<T>(endpoint, {
              ...options,
              observe: "response",
            })
            .pipe(
              distinctUntilChanged(),
              catchError((error) => of(error || "Failed to get full response."))
            );

  get = <T>(endpoint: string, options: HttpOption = {}): Observable<T> => 
    this.http.get<T>(endpoint, {
              ...options,
              observe: "body",
            })
            .pipe(
              distinctUntilChanged(),
              catchError((error) => of(error || "Failed to get data."))
            );
  
  add = <T>(endpoint: string, newItem: T | T[], options?: HttpOption): Observable<ICUDMessage> => 
    this.http.post<ICUDMessage>(endpoint, newItem, options)
            .pipe(
              catchError((error) => of(error || "Failed to add item(s)."))
            );

  update = <T>(endpoint: string, newItem: T | T[], options?: HttpOption): Observable<ICUDMessage> => 
    this.http.patch<ICUDMessage>(endpoint, newItem, options)
            .pipe(
              catchError((error) => of(error || "Failed to update item(s)."))
            );

  delete = (endpoint: string, options?: HttpOption): Observable<ICUDMessage> => 
    this.http.delete<ICUDMessage>(endpoint, options)
            .pipe(
              catchError((error) => of(error || "Failed to delete item(s)."))
            );

  /**
   *  Data Access Service
   */
  constructor(
    private http: HttpClient
  ) {
  }

}