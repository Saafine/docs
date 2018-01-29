If the state of mediaPlaying is completely predicted by another part of the state tree,
then it isn’t true state. It’s derived state. That belongs in a selector, not in the store.

audioPlaying$ = this.store.select('audioPlaying');
videoPlaying$ = this.store.select('videoPlaying');
mediaPlaying$ = Observable.combineLatest(
  this.audioPlaying$,
  this.videoPlaying$,
  (audioPlaying, videoPlaying) => audioPlaying || videoPlaying
)