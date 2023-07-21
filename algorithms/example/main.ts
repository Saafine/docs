interface Size2d {
  width: number;
  height: number;
}

interface Position2d {
  x: number;
  y: number;
}

interface Render2dDefinition {
  size: Size2d;
  position: Position2d;
  cssClass: string;
  baseUnit: '%';
}

class Board {
  size: Size2d = {
    width: 100,
    height: 100,
  };

  position: Position2d = {
    x: 0,
    y: 0,
  };

  cells = {
    x: 10,
    y: 10,
  };

  baseUnit: Render2dDefinition['baseUnit'] = '%';

  getRender2dDefinition(): Render2dDefinition[] {
    return [
      {
        position: this.position,
        size: this.size,
        cssClass: 'element__board',
        baseUnit: this.baseUnit,
      },
    ].concat(this.getBoardCellDefinitions());
  }

  private getBoardCellDefinitions(): Render2dDefinition[] {
    const defs: Render2dDefinition[] = [];

    for (let x = 0; x < this.cells.x; x++) {
      for (let y = 0; y < this.cells.y; y++) {
        const width = this.size.width / this.cells.x;
        const height = this.size.height / this.cells.y;

        const def: Render2dDefinition = {
          position: {
            x: width * x,
            y: height * y,
          },
          size: {
            width,
            height,
          },
          cssClass: 'element__board-cell',
          baseUnit: '%',
        };
        defs.push(def);
      }
    }

    return defs;
  }
}

class Renderer {
  private selector = '#render-target';

  render(renderDefs: Render2dDefinition[]): void {
    const renderTarget = document.querySelector(this.selector);
    if (!renderTarget) throw new Error('No Renderer Target');

    // Remove all children
    renderTarget.innerHTML = '';

    renderDefs.forEach(({ size, cssClass, position, baseUnit }) => {
      const element = document.createElement('div');
      const baseSizeUnit = baseUnit;
      element.style.height = `${size.height}${baseSizeUnit}`;
      element.style.width = `${size.width}${baseSizeUnit}`;
      element.style.left = `${position.x}${baseSizeUnit}`;
      element.style.top = `${position.y}${baseSizeUnit}`;
      element.classList.add(cssClass);
      renderTarget.appendChild(element);
    });
  }
}

class Snake {
  private position: Position2d = {
    x: 0,
    y: 0,
  };

  getRender2dDefinition(): Render2dDefinition[] {
    return [
      {
        size: {
          width: 10,
          height: 10,
        },
        position: this.position,
        baseUnit: '%',
        cssClass: 'element__snake',
      },
    ];
  }

  moveRight(): void {
    this.position = {
      ...this.position,
      x: this.position.x + 10,
    };
  }

  moveLeft(): void {
    this.position = {
      ...this.position,
      x: this.position.x - 10,
    };
  }

  moveUp(): void {
    this.position = {
      ...this.position,
      y: this.position.y - 10,
    };
  }

  moveBottom(): void {
    this.position = {
      ...this.position,
      y: this.position.y + 10,
    };
  }
}

function run() {
  const renderer = new Renderer();
  const board = new Board();
  const snake = new Snake();

  const rerender = () => {
    renderer.render(board.getRender2dDefinition().concat(snake.getRender2dDefinition()));
  };


  const setupInterval = () => setInterval(() => {
    switch (lastMove) {
      case 'up':
        snake.moveUp();
        break;
      case 'down':
        snake.moveBottom();
        break;
      case 'right':
        snake.moveRight();
        break;
      case 'left':
        snake.moveLeft();
        break;
    }
    rerender();
  }, 1000)

  let interval = setupInterval();

  let lastMove: string = 'right';
  addEventListener('keydown', (event) => {
    clearInterval(interval);

    switch (event.key) {
      case 'ArrowUp':
        lastMove = 'up';
        // snake.moveUp();
        break;
      case 'ArrowDown':
        lastMove = 'down';
        // snake.moveBottom();
        break;
      case 'ArrowRight':
        lastMove = 'right';
        // snake.moveRight();
        break;
      case 'ArrowLeft':
        lastMove = 'left';
        // snake.moveLeft();
        break;
    }

    interval = setupInterval();
  });
}

run();
