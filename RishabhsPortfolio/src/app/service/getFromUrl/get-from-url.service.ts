import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GetFromUrlService {
  constructor(private route: ActivatedRoute) {}

  getIdFromUrl() {
    const id = this.route.snapshot.params['id'];
    return id;
  }
  
}
