import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameModeWriteComponent } from './game-mode-write.component';

describe('GameModeWriteComponent', () => {
  let component: GameModeWriteComponent;
  let fixture: ComponentFixture<GameModeWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameModeWriteComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GameModeWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
