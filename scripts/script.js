window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  console.log(ctx);
  canvas.width = 600;
  canvas.height = 600;

  //Settings
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'red';

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.3;
      this.sides = 10;
      this.maxLevel = 6;
    }
    draw(context) {
      context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      context.save();
      context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
      context.rotate(0);
      for (let i = 1; i <= this.sides; i++) {
        this.#drawLine(context, 0);
        context.rotate((Math.PI * 2) / this.sides);
      }

      context.restore();
    }
    #drawLine(context, level) {
      if (level > this.maxLevel) return;
      context.beginPath();
      context.moveTo(0, 0); // comienzo de la linea o donde comienza a dibujar
      context.lineTo(this.size, 0); // hacia donde va la raya o raya final o donde termina
      context.stroke();
      context.save();
      context.translate(this.size, 0);
      context.scale(0.7, 0.7);
      context.rotate(0.9);
      this.#drawLine(context, level + 1);
      context.restore();
    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height);
  fractal1.draw(ctx);

  class Particle {}

  class Rain {}
});
