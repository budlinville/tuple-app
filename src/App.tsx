import { Tuple } from 'tuple-ui';
import { SplitViewT, ViewT } from 'tuple-ui/dist/src/components/Tuple/Viewport/ViewportTypes';

function App() {
  //----------------------------------------------------------------------------------------------------------------------
  // PAGES
  //----------------------------------------------------------------------------------------------------------------------

  const hello = <div>hello</div>;
  const world = <div>world</div>;
  const ford = <div>ford</div>;
  const jeep = <div>jeep</div>;
  const chrysler = <div>chrysler</div>;
  const ferrari = <div>ferrari</div>;
  const gm = <div>gm</div>;
  const honda = <div>honda</div>;
  const carpe = <div>carpe</div>;
  const diem = <div>diem</div>;
  const monkey = <div>monkey</div>;
  const pox = <div>pox</div>;
  const apple = <div>apple</div>;
  const banana = <div>banana</div>;
  const carrot = <div>carrot</div>;
  const brocoli = <div>brocoli</div>;
  const tomato = <div>tomato</div>;
  const orange = <div>orange</div>;

  const pages = {
      'hello': { name: 'hello', component: () => hello },
      'world': { name: 'HELLO', component: () => world },
      'ford': { name: 'ford', component: () => ford },
      'jeep': { name: 'jeep', component: () => jeep },
      'chrysler': { name: 'chrysler', component: () => chrysler },
      'ferrari': { name: 'ferrari', component: () => ferrari },
      'gm': { name: 'gm', component: () => gm },
      'honda': { name: 'honda', component: () => honda },
      'carpe': { name: 'carpe', component: () => carpe },
      'diem': { name: 'diem', component: () => diem },
      'monkey': { name: 'monkey', component: () => monkey },
      'pox': { name: 'pox', component: () => pox },
      'apple': { name: 'apple', component: () => apple },
      'banana': { name: 'banana', component: () => banana },
      'carrot': { name: 'carrot', component: () => carrot },
      'brocoli': { name: 'brocoli', component: () => brocoli },
      'tomato': { name: 'tomato', component: () => tomato },
      'orange': { name: 'orange', component: () => orange },
  };

  //----------------------------------------------------------------------------------------------------------------------
  // TREE
  //----------------------------------------------------------------------------------------------------------------------
  const tree = [
      'hello',
      'world',
      { id: 1, label: 'yolo', branches: [
          'carpe',
          'diem',
          { id: 2, label: 'hello again', branches: [
              'hello',
              'world',
              { id: 3, label: 'cars', branches: [
                  'ford',
                  'jeep',
                  'chrysler',
                  'ferrari',
                  'gm',
                  'honda',
              ]}
          ]}
      ]},
      'monkey',
      'pox',
  ];

  //----------------------------------------------------------------------------------------------------------------------
  // Views
  //----------------------------------------------------------------------------------------------------------------------
  const HelloWorld: ViewT = {
    pageIds: ['hello', 'world'],
    activePageId: 'hello',
  };

  const Cars: ViewT = {
    pageIds: ['ford', 'jeep', 'chrysler', 'ferrari', 'gm', 'honda'],
    activePageId: 'jeep',
  };

  const Carpe: ViewT = {
    pageIds: ['carpe'],
    activePageId: 'carpe',
  };

  const Diem: ViewT = {
    pageIds: ['diem'],
    activePageId: 'diem',
  };

  const MonkeyPox: ViewT = {
    pageIds: ['monkey', 'pox'],
    activePageId: 'monkey',
  };

  const Apple: ViewT = {
    pageIds: ['apple'],
    activePageId: 'apple',
  };

  const Banana: ViewT = {
    pageIds: ['banana'],
    activePageId: 'banana',
  };

  const Carrot: ViewT = {
    pageIds: ['carrot'],
    activePageId: 'carrot',
  };

  const Brocoli: ViewT = {
    pageIds: ['brocoli'],
    activePageId: 'brocoli',
  };

  const Tomato: ViewT = {
    pageIds: ['tomato'],
    activePageId: 'tomato',
  };

  const Orange: ViewT = {
    pageIds: ['orange'],
    activePageId: 'orange',
  };

  const _SixViewsTopRight: SplitViewT = { head: Cars, tail: Carpe, direction: 'vertical' };
  const _SixViewsTop: SplitViewT = { head: HelloWorld, tail: _SixViewsTopRight, direction: 'horizontal' };
  const _SixViewsBottomLeft: SplitViewT = { head: Apple, tail: Banana, direction: 'horizontal' };
  const _SixViewsBottom: SplitViewT = { head: _SixViewsBottomLeft, tail: Diem, direction: 'horizontal' };
  const views: SplitViewT = { head: _SixViewsTop, tail: _SixViewsBottom, direction: 'vertical' };

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Tuple pages={pages} tree={tree} views={views} template='lannister'/>
    </div>
  )
}

export default App
