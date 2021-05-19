import { TestBed } from '@angular/core/testing';
import { DataAccessService } from './data-access.service';

import { NexusService } from './nexus.service';

describe('NexusService', () => {
  let service: NexusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NexusService);
  });

  test('cheer up', () => {
    expect(service).toBeTruthy();
  });

  // test("Get single Nexus", () => {
    
  //   const nexus$ = service.getSingle("nexus-central");

  //   nexus$.subscribe(nexus => {
  //     expect(nexus.name).toEqual("Central Nexus");
  //   });

  // });



});
