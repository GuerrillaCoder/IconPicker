import React, { useState } from "react";
import { AutoComplete } from 'antd';
import { IconOption } from "./icon-picker";


const mockVal = (str: string, repeat: number = 1) => {
    return {
      value: str.repeat(repeat),
    };
  };

export interface IconPickerSearchProps{
    iconOptions : IconOption[];
}

export const IconPickerSearch: React.FunctionComponent<IconPickerSearchProps> = (props) => {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const onSearch = (searchText: string) => {
      setOptions(
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
      );
    };

    const onSelect = (data: string) => {
      console.log('onSelect', data);
    };

    const onChange = (data: string) => {
      setValue(data);
    };


    return (
        <div>
            <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
            />
        </div>
    );
}