import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
// angular.module('myApp', ['typer']);

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.css'],
})
export class ParticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
  words="['Angular', 'React', 'Ember']"
  
}
