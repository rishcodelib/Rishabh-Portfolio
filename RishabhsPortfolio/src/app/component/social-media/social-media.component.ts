import { Component, OnInit } from '@angular/core';
import { SmediaService } from 'src/app/service/social-media/smedia.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.sass'],
})
export class SocialMediaComponent implements OnInit {
  constructor(public sm: SmediaService) {
    console.log(sm.socialMediaLinks);
  }

  ngOnInit(): void {}
}
