import { MyContext } from './Componentes/MyContext.tsx';
import React from 'react'; // Importa React
import './App.css';
import MainHeader from  './Componentes/MainHeader.tsx';
import TodoList from './microFrontendDos/TodoList.tsx';
import ProfiledCard from './microFrontendUno/ProfileCard.tsx';
import CallbackComponent from './Componentes/CallbackComponent.tsx';
import Counter from './Componentes/Counter.tsx';
import CounterWithReducer from './Componentes/CounterWithReducer.tsx';
import LayoutEffectComponent from './Componentes/LayoutEffectComponent.tsx';
import MemoComponent from './Componentes/MemoComponent.tsx';
import MyComponent from './Componentes/MyComponent.tsx';
import RefComponent from './Componentes/RefComponent.tsx';

function App() {
    return (
        <div className="app-container">
            <MainHeader />

            <div className="main-content">
                <div className="ui-section">
                    <ProfiledCard
                        imageUrl="src/assets/rey-leon.jpg"
                        name="Pepito"
                        description= "Desarrollador de software"
                    />
                    
                    <TodoList />
                </div>

                <div className="ui-section">
                    <ProfiledCard
                        imageUrl="src/assets/SHREK.jpg"
                        name="Mariela"
                        description="Desarrolladora de software Senior"
                    />
                    <TodoList />
                </div>

                <div className="hooks-section">
                    <MyContext.Provider value="Hello from Context">
                        <MyComponent />
                    </MyContext.Provider>
                    <Counter />
                    <CounterWithReducer />
                    <CallbackComponent />
                    <MemoComponent />
                    <RefComponent />
                    <LayoutEffectComponent />
                </div>
            </div>
        </div>
    );
}

export default App;