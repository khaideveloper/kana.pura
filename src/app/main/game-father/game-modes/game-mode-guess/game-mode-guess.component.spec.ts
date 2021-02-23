import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameModeGuessComponent } from './game-mode-guess.component';

describe('GameModeGuessComponent', () => {
  let component: GameModeGuessComponent;
  let fixture: ComponentFixture<GameModeGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameModeGuessComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GameModeGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
