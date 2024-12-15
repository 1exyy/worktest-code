import {Controlled} from "react-codemirror2";
import {useContext, useRef, useState} from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/mode/go/go.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/theme/dracula.css';
import {TModeOptions} from "./types.ts";
import {ModeSelect} from "../ModeSelect/ModeSelect.tsx";
import './CodeEditor.scss';
import {SingleValue} from "react-select";
import {Button} from "../Button/Button.tsx";
import {TaskContext} from "../../context/taskContext.ts";
import '../../tests/server.test.ts';
import {IServerRequest} from "../../models/IServerRequest.ts";

type TCodeEditorProps = {
    className?: string;
}

const mods: SingleValue<TModeOptions>[] = [
    {label: "Go", value: "go"},
    {label: "Python", value: "python"}
];

export const CodeEditor = ({}: TCodeEditorProps) => {
    const {setTaskServerResponse} = useContext(TaskContext);
    const [mode, setMode] = useState<SingleValue<TModeOptions>>(mods[0]);
    const [codeValue, setCodeValue] = useState<string>("");
    const editor = useRef(null);
    const wrapper = useRef(null);

    const codeChangeHandler = (...args: any[]): void => {
        setCodeValue(args[2]);
    }
    const editorWillUnmount = (): void => {
        //@ts-ignore вынужденное решение т.к у codemirror отсутствует типизация
        editor.current.display.wrapper.remove();
        //@ts-ignore вынужденное решение т.к у codemirror отсутствует типизация
        wrapper.current.hydrated = false;
    }

    const runCode = () => {
        fetch('/api/check', {
            method: "post",
            body: JSON.stringify({
                language: mode?.value,
                message: codeValue
            } as IServerRequest)
        })
            .then(res => res.json())
            .then(json => setTaskServerResponse(json))
            .catch(error => setTaskServerResponse({
                status: "error",
                message: error.message
            }));
    }

    return (
        <div className="code-editor__wrapper wrapper">
            <ModeSelect className="code-editor__mode-selector"
                        value={mode}
                        options={mods}
                        onChange={modeValue => {
                            setMode(modeValue)
                        }}/>
            <Button className="code-editor__run-button" onClick={runCode}>Run ⯈</Button>
            <Controlled className="code-editor__editor"
                        onBeforeChange={codeChangeHandler}
                        key={"code_editor"}
                        ref={wrapper}

                        options={{
                            mode: mode?.value,
                            theme: "dracula",
                            lint: true,
                            lineNumbers: true,
                            lineWrapping: true,
                            spellcheck: true,
                            autoCloseTags: true,
                            autoCloseBrackets: true,
                            matchTags: true,
                            matchBrackets: true
                        }}
                        editorDidMount={(event) => editor.current = event}
                        editorWillUnmount={editorWillUnmount}
                        value={codeValue}/>
        </div>
    );
};

