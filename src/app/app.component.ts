import { Component } from '@angular/core';
import { SALES } from './configs';
import { catchError, of } from 'rxjs';
import { HttpService, Sale } from '@jamespatterson-feswe/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected categories: string[] = [];
  protected sales: Sale[] = SALES;
  protected header = 'TOMMY HILFIGER';
  protected footer = '© 2024 Tommy Hilfiger licensing, LLC. All rights reserved.';

  constructor(private readonly http: HttpService) {
    this.http.get('https://fakestoreapi.com/products/categories')
      .pipe(catchError(() => of([] as unknown as string[])))
      .subscribe({
        next: (resp) => {
          if ((resp as string[]).length) this.categories = resp as string[];
        }
      });
  }
}
