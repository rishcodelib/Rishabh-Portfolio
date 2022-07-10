import { Component, OnInit } from '@angular/core';
import { SocialMediaProfessionalService } from 'src/app/service/prof-sm/social-media-professional.service';

@Component({
  selector: 'app-prof-sm',
  templateUrl: './prof-sm.component.html',
  styleUrls: ['./prof-sm.component.sass']
})
export class ProfSmComponent implements OnInit {

  constructor(public profSm: SocialMediaProfessionalService) {
    console.log(profSm.profSm);
    
   }

  ngOnInit(): void {
  }

}
