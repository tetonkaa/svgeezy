import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FreeSVG } from './freeSVG';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const svgs = [
      { id: 12, name: 'Directional Arrow (Up)', SVGpath:`<svg
      width="210mm"
      height="297mm"
      viewBox="0 0 210 297"
      version="1.1"
      id="svg5"
      inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
      sodipodi:docname="drawing.svg"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
     <defs
        id="defs2" />
     <g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1">
       <path
          style="fill:#000000;stroke-width:0.264583"
          id="path279"
          d="m 64.036431,56.917849 c -4.960998,8.70963 -9.623134,17.58107 -13.840377,26.676098 -1.254551,2.705595 -2.444248,5.440791 -3.666371,8.161186 -4.014224,9.423517 -2.118532,4.911874 -5.698408,13.530167 0,0 2.908874,1.62553 2.908874,1.62553 v 0 c 3.408487,-8.702308 1.584915,-4.15559 5.493229,-13.631096 1.220197,-2.717975 2.392743,-5.457849 3.660595,-8.153926 4.255987,-9.05033 9.04001,-17.882619 14.560256,-26.227021 0,0 -3.417798,-1.980938 -3.417798,-1.980938 z" />
       <path
          style="fill:#000000;stroke-width:0.264583"
          id="path281"
          d="m 66.575061,63.080902 c 0.276809,-0.272378 0.535403,-0.5646 0.830429,-0.817131 2.806761,-2.402483 5.90414,-4.473538 8.860157,-6.681388 4.105527,-3.066418 3.987959,-3.018232 8.044045,-6.220865 5.035114,-3.997878 9.926498,-8.16724 14.449576,-12.739481 0.641588,-0.43615 0.947071,-1.233173 1.553042,-1.707065 0.14214,-0.111152 0.33213,-0.226822 0.50806,-0.186759 0.19333,0.04403 0.62681,0.463389 0.4382,0.402246 -3.032395,-0.983012 -3.251139,-2.220317 -1.828303,0.478237 3.588393,9.603343 8.248773,18.772605 13.532373,27.548009 1.47081,2.442837 3.03247,4.829815 4.5487,7.24472 4.6493,6.630408 9.03787,13.961552 15.30965,19.248337 2.96328,2.497899 5.60624,3.589864 9.17709,5.518608 3.26112,1.243076 6.71718,1.47144 10.15786,1.051083 0.60355,-0.07374 1.19893,-0.203454 1.7984,-0.305181 0,0 -3.12752,-2.192747 -3.12752,-2.192747 v 0 c -0.58345,0.09945 -1.16272,0.22761 -1.75034,0.298349 -3.38048,0.40695 -6.76201,0.121836 -9.94514,-1.1435 0.70443,1.448872 0.59648,1.083969 -3.03702,-1.88164 -1.19907,-0.978667 -2.32683,-2.047115 -3.39892,-3.163437 -2.90336,-3.023132 -5.39039,-6.299229 -7.83928,-9.697649 -1.53153,-2.125371 -2.97925,-4.309904 -4.46887,-6.464855 -1.52086,-2.412307 -3.09556,-4.791496 -4.56258,-7.236918 -5.17455,-8.625639 -9.72742,-17.690968 -12.91627,-27.246892 -1.35072,-2.951517 -0.48332,-1.771261 -4.731022,-4.509656 -0.184219,-0.118761 -0.431842,-0.154948 -0.64738,-0.115152 -0.826796,0.152659 -1.423831,1.624917 -2.035453,2.069785 -4.364027,4.660717 -9.155718,8.881761 -14.133885,12.875998 -3.759383,2.95152 -4.241316,3.384545 -8.078544,6.182291 -3.030011,2.2092 -6.221042,4.230047 -9.178044,6.538349 -0.32658,0.254934 -0.615744,0.554479 -0.923615,0.831718 0,0 3.394604,2.022586 3.394604,2.022586 z" />
       <path
          style="fill:#000000;stroke-width:0.264583"
          id="path283"
          d="m 97.4562,35.845384 c -2.259912,6.350664 -3.951821,12.858655 -4.743106,19.567044 -0.422883,3.585167 -0.657518,7.190038 -0.986279,10.785059 -2.457003,30.464834 -6.197169,60.803673 -9.899599,91.136063 -1.206672,9.04952 -1.937338,18.19953 -4.071692,27.09965 -0.768683,3.20537 -1.292503,4.65686 -2.273551,7.71537 -0.904113,2.54395 -1.824784,5.08445 -2.853322,7.58143 -0.537933,1.30593 -1.133163,2.58285 -1.655017,3.8954 -0.821436,2.19592 -1.534845,4.43154 -2.144633,6.69478 -1.059807,3.9309 -1.895964,7.9156 -2.798635,11.88418 0,0 3.357909,1.80348 3.357909,1.80348 v 0 c 0.842624,-3.97176 1.70113,-7.94259 2.825234,-11.84632 0.637818,-2.23971 1.364247,-4.4546 2.150496,-6.64676 1.474219,-3.85878 3.070617,-7.67252 4.295587,-11.62377 0.907746,-2.9741 1.494356,-4.70636 2.18254,-7.80691 2.002652,-9.02271 2.520913,-18.28017 3.475509,-27.44646 3.089417,-30.38793 6.629386,-60.727561 9.999146,-91.085244 0.439409,-3.529354 0.799102,-7.06955 1.318228,-10.588061 0.975154,-6.609358 2.680044,-13.07637 5.278905,-19.23415 0,0 -3.45772,-1.884781 -3.45772,-1.884781 z" />
     </g></svg>
   `,src:'/assets/svgs/drawing.svg', download: 'drawing.svg'},
      { id: 13, name: 'Directional Arrow(left)',SVGpath:`<svg
      width="210mm"
      height="297mm"
      viewBox="0 0 210 297"
      version="1.1"
      id="svg5"
      sodipodi:docname="left-arrow(drawn).svg"
      inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
     <sodipodi:namedview
        id="namedview7"
        pagecolor="#ffffff"
        bordercolor="#111111"
        borderopacity="1"
        inkscape:showpageshadow="0"
        inkscape:pageopacity="0"
        inkscape:pagecheckerboard="1"
        inkscape:deskcolor="#d1d1d1"
        inkscape:document-units="mm"
        showgrid="false"
        inkscape:zoom="0.74564394"
        inkscape:cx="396.97231"
        inkscape:cy="561.9304"
        inkscape:window-width="1920"
        inkscape:window-height="1017"
        inkscape:window-x="-32000"
        inkscape:window-y="-32000"
        inkscape:window-maximized="0"
        inkscape:current-layer="layer1" />
     <defs
        id="defs2" />
     <g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1">
       <path
          style="fill:#000000;stroke-width:0.264583"
          id="path108"
          d="m 68.993326,93.931279 c -6.772281,3.32029 -13.346282,7.087631 -19.679002,11.183891 -2.97444,1.92398 -5.95821,3.84399 -8.79453,5.96631 -3.05074,2.28277 -5.89935,4.82386 -8.84903,7.23579 -8.36801,7.66927 -16.39132,15.88022 -22.8228695,25.27962 -0.85081,1.24342 -1.59119,2.55891 -2.38679,3.83836 0,0 3.07038,1.77913 3.07038,1.77913 v 0 c 0.7467095,-1.29739 1.4329295,-2.63152 2.2401295,-3.89216 6.11487,-9.54988 13.99513,-17.85029 22.31753,-25.48828 2.96701,-2.39044 5.82793,-4.91891 8.90104,-7.17131 2.86821,-2.10222 5.88474,-3.99751 8.903,-5.87795 6.49113,-4.04412 13.276449,-7.733681 20.354499,-10.645351 0,0 -3.254357,-2.20805 -3.254357,-2.20805 z" />
       <path
          style="fill:#000000;stroke-width:0.264583"
          id="path110"
          d="m 60.659241,198.22699 c -5.14982,-1.85279 -10.19868,-3.9784 -15.03123,-6.56259 -4.95308,-2.64865 -10.74862,-6.65658 -14.94687,-10.05937 -2.68123,-2.17319 -5.10938,-4.64125 -7.66407,-6.96188 -1.92939,-2.36138 -4.08426,-4.55524 -5.78817,-7.08414 -2.63931,-3.91719 -4.51427,-8.21995 -5.08795,-12.92832 -0.2109,-1.73099 0.0929,-3.48633 0.13933,-5.2295 0,0 -3.0878705,-1.58147 -3.0878705,-1.58147 v 0 c -0.0272,1.78682 -0.31539,3.58878 -0.0817,5.36047 0.63334,4.80244 2.5799005,9.18161 5.2872205,13.17305 1.735,2.55794 3.91961,4.78015 5.87942,7.17022 2.56528,2.33634 5.00684,4.81621 7.69583,7.00902 10.65094,8.68557 22.95161,15.22359 35.75994,20.08897 0,0 -3.07384,-2.39446 -3.07384,-2.39446 z" />
       <path
          style="fill:#000000;stroke-width:0.264583"
          id="path112"
          d="m 104.89484,150.77814 c -17.285074,-0.96745 -34.603104,-0.93115 -51.904764,-1.37828 -5.3117,-0.13727 -10.62191,-0.32721 -15.93286,-0.49081 -18.3,-0.82441 -9.54868,-0.36685 -26.25561,-1.34128 0,0 2.26609,1.6647 2.26609,1.6647 v 0 c 16.47158,0.77306 7.82844,0.40092 25.93031,1.09559 10.75331,0.31621 21.50798,0.58498 32.26121,0.90407 12.26823,0.36405 24.55213,0.72147 36.779444,1.85019 0,0 -3.14382,-2.30418 -3.14382,-2.30418 z" />
     </g>
   </svg>`, src: '/assets/svgs/left-arrow(drawn).svg'  },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {svgs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(svgs: FreeSVG[]): number {
    return svgs.length > 0 ? Math.max(...svgs.map(svg => svg.id)) + 1 : 11;
  }
}
