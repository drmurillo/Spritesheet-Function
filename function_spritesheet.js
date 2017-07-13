function SpriteSheet(path, imageWidth,
  frameWidth, frameHeight, frameSpeed, endFrame) {
  this.img = loadImage(path);
  this.framesPerRow = floor(imageWidth / frameWidth);
  this.frameSpeed = 60 / frameSpeed;
  this.currentFrame = 0;
  this.counter = 0;

  this.animate = function(x, y) {
    var row = floor(this.currentFrame % this.framesPerRow);
    var col = floor(this.currentFrame / this.framesPerRow);
    this.counter += 1;
    if (this.counter > this.frameSpeed) {
      this.counter = 0;
      if (this.currentFrame < endFrame - 1) {
        this.currentFrame += 1;
      } else if (this.currentFrame == endFrame - 1) {
        this.currentFrame = 0;
      }
    }
    image(this.img, x, y, frameWidth, frameHeight,
      row * frameWidth, col * frameHeight, frameWidth, frameHeight);
  };
}
