import {
  Component,
  Injectable,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { TabMangerService } from 'src/app/tab-manger.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  constructor(
    private cdRef: ChangeDetectorRef,
    private tabMangerService: TabMangerService
  ) {}

  currentTab = 1;
  selectTab(index: number): void {
    this.tabMangerService.setTab(index);
  }

  updateDetectChange(): void {
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.tabMangerService.Tab$.subscribe((val: number) => {
      if (val) this.currentTab = val;
    });
  }
}
