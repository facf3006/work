import React, { useState } from 'react';
import CallbackTutorial from './components/hooks/CallbackTutorial';
import EffectTutorial from './components/hooks/EffectTutorial'
import ImperativeHandler from './components/hooks/ImperativeHandler'
import ContextTutorial from './components/hooks/ContextTutorial'
import MemoTutorial from './components/hooks/MemoTutorial'
import ReducerTutorial from './components/hooks/ReducerTutorial'
import StateTutorial from './components/hooks/StateTutorial'
import RefTutorial from './components/hooks/RefTutorial'
import LayoutEffectTutorial from './components/hooks/LayoutEffectTutorial'
import './App.css'


function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelection = (componentName) => {
    setSelectedComponent(componentName);
  };

  let componentToRender;

  switch (selectedComponent) {
    case "StateTutorial":
      componentToRender = (
        <div >
          <StateTutorial />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
      case "EffectTutorial":
        componentToRender = (
          <div >
            <EffectTutorial />
            <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
          </div>
        );
        break;
        case "RefTutorial":
      componentToRender = (
        <div >
          <RefTutorial />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
    case "ReducerTutorial":
      componentToRender = (
        <div>
          <ReducerTutorial />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
                  case "MemoTutorial":
      componentToRender = (
        <div>
          <MemoTutorial />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
        case "ContextTutorial":
      componentToRender = (
        <div>
          <ContextTutorial />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
    case "CallbackTutorial":
      componentToRender = (
        <div>
          <CallbackTutorial />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
    case "LayoutEffectTutorial":
      componentToRender = (
        <div>
          <LayoutEffectTutorial />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
    case "ImperativeHandler":
      componentToRender = (
        <div>
          <ImperativeHandler />
          <button onClick={() => handleSelection(null)}>Voltar para seleção de componentes</button>
        </div>
      );
      break;
    default:
      componentToRender = (
        <div >
          <button onClick={() => handleSelection("StateTutorial")}>StateTutorial</button>
          <button onClick={() => handleSelection("EffectTutorial")}>EffectTutorial</button>
          <button onClick={() => handleSelection("ReducerTutorial")}>ReducerTutorial</button>
          <button onClick={() => handleSelection("RefTutorial")}>RefTutorial</button>
          <button onClick={() => handleSelection("MemoTutorial")}>MemoTutorial</button>
          <button onClick={() => handleSelection("ContextTutorial")}>ContextTutorial</button>
          <button onClick={() => handleSelection("CallbackTutorial")}>CallbackTutorial</button>
          <button onClick={() => handleSelection("LayoutEffectTutorial")}>LayoutEffectTutorial</button>
          <button onClick={() => handleSelection("ImperativeHandler")}>ImperativeHandler</button>
        </div>
      );
      break;
  }

  return (
    <div>
      <h1>Hooks</h1>
      {componentToRender}
    </div>
  );
}

export default App;

