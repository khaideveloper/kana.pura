import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameModeFillComponent } from './game-mode-fill.component';

describe('GameModeFillComponent', () => {
  let component: GameModeFillComponent;
  let fixture: ComponentFixture<GameModeFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameModeFillComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GameModeFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
