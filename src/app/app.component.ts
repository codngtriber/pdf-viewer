import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  src =
    'https://cdn.mediavalet.com/aunsw/musictribe/4I-Y00hom0KWu-XcJPRdNA/_GbrPB063EOZvg3bg6P5yg/Original/FACE%20STYL%20PH1%20Tannoy%20Brochure.pdf';
  title = 'my-favorite-project';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(window.location.href.split('?')[1].replaceAll('%2F', '/'));
    this.src = window.location.href.split('?')[1]?.replaceAll('%2F', '/');
  }
}
