import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INexus } from '../models/interfaces/nexus.interface';
import { DataAccessService } from './data-access.service';

@Injectable({
  providedIn: 'root'
})
export class NexusService {

  private readonly endpoint = "Nexus";
  private readonly indexingFieldName = "dbname";
  
  constructor(
    private dataAccessService: DataAccessService
  ) {}

  getSingle = (dbname: string): Observable<INexus> => {

    let url = "";
    if (environment.production) {
      url = `${environment.apiBase}/${this.endpoint}/${this.indexingFieldName}/${dbname}`;
    } else {
      url = `${environment.apiBase}/nexus.json`;
    }
    
    return this.dataAccessService.get(url);
    
  }
  
}
