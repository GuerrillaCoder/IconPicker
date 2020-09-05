import React, { useState } from "react";
// import { AutoComplete } from 'antd';
import { IconOption } from "./icon-picker";
import { Autocomplete } from "devextreme-react/autocomplete";

const mockVal = (str: string, repeat: number = 1) => {
  return {
    value: str.repeat(repeat),

  };
  return ["one", "two"];
};

export interface IconPickerSearchProps {
  iconOptions: IconOption[];
}

export const IconPickerSearch: React.FunctionComponent<IconPickerSearchProps> = (props) => {



  return (
    <div>
      <Autocomplete
        dataSource={props.iconOptions}
        valueExpr="name"
        // value={this.state.firstName}
        // onValueChanged={this.handleFirstNameChange}
        placeholder="Search icons..."
        itemRender={renderAutocompleteItem}
      />
    </div>
  );
}

const renderAutocompleteItem = (itemData : IconOption) => {
  return (
      <div>
          <span className="float-left mr-2"><itemData.Component width="20px" /></span>
          <span>{itemData.name}</span>
      </div>
  );
};