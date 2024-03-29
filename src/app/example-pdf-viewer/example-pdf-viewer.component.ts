import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import {
  NgxExtendedPdfViewerService,
  pdfDefaultOptions,
  PdfBreakpoints,
} from 'ngx-extended-pdf-viewer';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ExamplePdfViewerComponent implements OnInit {
  @Input() src: any;
  @Input() zoom: any = '65%';

  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  /** In most cases, you don't need the NgxExtendedPdfViewerService. It allows you
   *  to use the "find" api, to extract text and images from a PDF file,
   *  to print programmatically, and to show or hide layers by a method call.
   */
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    /* More likely than not you don't need to tweak the pdfDefaultOptions.
       They are a collecton of less frequently used options.
       To illustrate how they're used, here are two example settings: */
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 1096 * 1096 * 5; // The default value is 4096 * 4096 pixels,

    // PdfBreakpoints.xs = 490; // unit: pixels
    // PdfBreakpoints.sm = 768;
    // PdfBreakpoints.md = 900;
    // PdfBreakpoints.lg = 1920;
    // PdfBreakpoints.xl = 1920;
    // PdfBreakpoints.xxl = 1920;
    // but most devices support much higher resolutions.
    // Increasing this setting allows your users to use higher zoom factors,
    // trading image quality for performance.
  }
  ngOnInit(): void {
    const windowResize = fromEvent(window, 'resize');
    // console.log(this.windowWidth);

    windowResize.pipe(debounceTime(1000)).subscribe(() => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      //   console.log(this.windowWidth);
      if (this.windowWidth > 1440) {
        this.zoom = '90%';
      }
      //   console.log(this.zoom);
    });
  }
}
