import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { groupBy } from '@progress/kendo-data-query';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-wrapper">
        <h6>Countries:</h6>
        <kendo-dropdownlist
            [data]="countries"
            textField="name"
            valueField="name">
        </kendo-dropdownlist>
    </div>
    `,
  styles: [
    `
        kendo-dropdownlist {
            width: 170px;
        }
    `,
  ],
})
export class AppComponent {
  public countries = [];
  constructor(private http: HttpClient) {
    this.http
      .get(
        'https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json'
      )
      .subscribe((x: Array<any>) => {
        this.countries = groupBy(x, [{ field: 'region' }]);
      });
  }
}
