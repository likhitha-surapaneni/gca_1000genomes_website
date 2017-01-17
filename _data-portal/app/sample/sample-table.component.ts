import { Component } from '@angular/core';

let sampleTableStyles: string = `

div.table-container {
  padding-right: 90px;
  padding-top: 70px;
}

@media (max-width: 991px) {
  div.table-container {
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    position: relative;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -webkit-overflow-scrolling: touch;
  }
}

th.matrix-dot {
  width: 60px;
  white-space: nowrap;
  padding: 0;
}
th.matrix-dot > div {
  -ms-transform: translate(100%, 0) rotate(315deg);
  -moz-transform: translate(100%, 0) rotate(315deg);
  -webkit-transform: translate(100%, 0) rotate(315deg);
  -o-transform: translate(100%, 0) rotate(315deg);
  transform: translate(100%, 0) rotate(315deg);

  -ms-transform-origin: left bottom;
  -moz-transform-origin: left bottom;
  -webkit-transform-origin: left bottom;
  -o-transform-origin: left bottom;
  transform-origin: left bottom;

  width: inherit;
}

th.matrix-dot > div >div {
  border-bottom: 1px solid #ccc;
  width: 130px;
  height: 42px;
  line-height: 42px;
}

`;

@Component({
    selector: 'sample-table',
    templateUrl: './sample-table.component.html',
    styles: [ sampleTableStyles ],
})
export class SampleTableComponent {

}
