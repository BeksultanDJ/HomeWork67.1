import { Provider } from 'react-redux';
import './App.css';
import { store } from "./redux/store";
import KeyboardSimulator from "./components/KeyboardSimulator.tsx";

const App = () => {
    return (
        <Provider store={store}>
            <KeyboardSimulator />
        </Provider>
    );
};

export default App;
