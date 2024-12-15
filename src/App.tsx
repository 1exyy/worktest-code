import './App.scss'
import {CodeEditor} from "./components/CodeEditor/CodeEditor.tsx";
import {Task} from "./components/Task/Task.tsx";
import {ServerOutput} from "./components/ServerOutput/ServerOutput.tsx";
import {TaskProvider} from "./context/Providers/TaskProvider.tsx";

function App() {
    return (
        <TaskProvider>
            <div className="main__wrapper">
                <Task className="main__task">Написать код для вывода в консоль фразы "Hello, world!".</Task>
                <CodeEditor/>
                <ServerOutput className="main__output"/>
            </div>
        </TaskProvider>
    );
}

export default App;
