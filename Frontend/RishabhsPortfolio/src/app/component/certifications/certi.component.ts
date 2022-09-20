import { Component, OnInit } from '@angular/core';
import { CertificateService } from 'src/app/service/certifications/certificate.service';

@Component({
  selector: 'app-certi',
  templateUrl: './certi.component.html',
  styleUrls: ['./certi.component.sass'],
})
export class CertiComponent implements OnInit {
  constructor(public certi: CertificateService) {}

  ngOnInit(): void {}
}
