import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameFatherComponent } from './game-father.component';

describe('GameFatherComponent', () => {
  let component: GameFatherComponent;
  let fixture: ComponentFixture<GameFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFatherComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
