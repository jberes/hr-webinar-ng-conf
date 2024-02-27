import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgxGridModule } from '@infragistics/igniteui-angular';
import { BlahBlahBLahComponent } from './blah-blah-blah.component';

describe('BlahBlahBLahComponent', () => {
  let component: BlahBlahBLahComponent;
  let fixture: ComponentFixture<BlahBlahBLahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlahBlahBLahComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCategoryChartModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlahBlahBLahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
