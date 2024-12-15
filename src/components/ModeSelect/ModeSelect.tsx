import Select, {SingleValue} from "react-select";
import {TModeOptions} from "../CodeEditor/types.ts";
import {IComponent} from "../types.ts";

type TModeSelectProps = IComponent & {
    value: SingleValue<any>;
    options: SingleValue<any>[];
    onChange: (value: SingleValue<TModeOptions>) => void;
}
export const ModeSelect = ({className, options, onChange, value}: TModeSelectProps) => {
    return (<div className={className}>
            <div className={`${className}_label`}>Выбор языка</div>
            <Select options={options} onChange={(newValue) => onChange(newValue)} value={value}/>
        </div>
    );
};

