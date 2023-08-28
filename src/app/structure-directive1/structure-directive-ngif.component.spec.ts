import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectiveNgifComponent } from './structure-directive-ngif.component';

describe('StructureDirectiveNgifComponent', () => {
  let component: StructureDirectiveNgifComponent;
  let fixture: ComponentFixture<StructureDirectiveNgifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructureDirectiveNgifComponent]
    });
    fixture = TestBed.createComponent(StructureDirectiveNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
