import { reveseLookup } from './locals.js';
import Sk from './skulpt.js';

var init = (function $__init__123$(self, type, dict) {
  Sk.builtin.pyCheckArgs('__init__', arguments, 2, 3, false, false);
  Sk.abstr.sattr(self, 'dict', dict ? dict : new Sk.builtin.dict(), false);
  Sk.abstr.sattr(self, 'type', type, false);
  return Sk.builtin.none.none$;
});
init.co_name = new Sk.builtins['str']('__init__');
init.co_varnames = ['self', 'type', 'dict'];

var repr = (function $__repr__123$(self){
  let dict = Sk.ffi.remapToJs(Sk.abstr.gattr(self, 'dict', false)['$r']());
  let type = Sk.ffi.remapToJs(Sk.abstr.gattr(self, 'type', false)['$r']());

  return Sk.ffi.remapToPy(`<Event(${type}-${reveseLookup(parseInt(type, 10))} ${dict})>`);
});
repr.co_name = new Sk.builtins['str']('__repr__');
repr.co_varnames = ['self'];

var getattr = (function $__getattr__123$(self, attr){
  Sk.builtin.pyCheckArgs('__getattr__', arguments, 2, 2, false, false);

  let dict = Sk.abstr.gattr(self, 'dict', false);

  return dict.mp$subscript(attr);
});
repr.co_name = new Sk.builtins['str']('__getattr__');
repr.co_varnames = ['self', 'attr'];

var event = (function $EventType$class_outer(gbl, loc) {
  loc.__init__ = new Sk.builtins.function(init, gbl);
  loc.__repr__ = new Sk.builtins.function(repr, gbl);
  loc.__getattr__ = new Sk.builtins.function(getattr, gbl);
  return;
});
event.co_name = new Sk.builtins['str']('Event');

export default function (gbl) {
  return Sk.misceval.buildClass(gbl, event, 'Event', []);
}