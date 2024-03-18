import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { JsonPipe } from '@angular/common';

import { API_DATA_RESOLVER_KEY } from './resolvers/api-data.resolver';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiDataComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public apiData = signal<Record<string, string>>({});

  public async ngOnInit(): Promise<void> {
    const routeData: Data = this.activatedRoute.snapshot.data;

    this.apiData.set(routeData[API_DATA_RESOLVER_KEY]);
  }
}
