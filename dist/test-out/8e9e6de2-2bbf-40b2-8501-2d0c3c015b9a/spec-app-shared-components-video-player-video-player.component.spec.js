import {
  VideoPlayerComponent,
  init_video_player_component
} from "./chunk-S37ODVS5.js";
import {
  PLATFORM_ID,
  TestBed,
  init_core,
  init_testing,
  provideZonelessChangeDetection
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/components/video-player/video-player.component.spec.ts
var require_video_player_component_spec = __commonJS({
  "src/app/shared/components/video-player/video-player.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_video_player_component();
    describe("VideoPlayerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [VideoPlayerComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: PLATFORM_ID, useValue: "browser" }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(VideoPlayerComponent);
        component = fixture.componentInstance;
        component.src = "test-video.mp4";
        component.type = "youtube";
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should have src input", () => {
        expect(component.src).toBe("test-video.mp4");
      });
      it("should have default type as youtube", () => {
        expect(component.type).toBe("youtube");
      });
    });
  }
});
export default require_video_player_component_spec();
//# sourceMappingURL=spec-app-shared-components-video-player-video-player.component.spec.js.map
