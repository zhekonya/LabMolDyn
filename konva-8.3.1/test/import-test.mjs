function equal(val1, val2, message) {
  if (val1 !== val2) {
    throw new Error('Not passed: ' + message);
  }
}

// try to import only core
import Konva from '../lib/Core.js';

// no external shapes
// equal(Konva.Rect, undefined, 'no external shapes');

import { Rect } from '../lib/shapes/Rect.js';

equal(Rect !== undefined, true, 'Rect is defined');

equal(Konva.Rect, Rect, 'Rect is injected');

import Konva2 from '../lib/index-node.js';

equal(Konva2.Rect, Rect, 'Rect is injected');

equal(Konva2, Konva, 'Same Konva');

// just do a simple action
const stage = new Konva.Stage();
stage.toDataURL();
