import React from "react";
import * as _ from "lodash";
import * as Icons from '../icons/index'
import { IconPickerSearch } from "./icon-picker-search";
import TextBox from 'devextreme-react/text-box';
import Highlighter from "react-highlight-words";

export class IconOption {
    source: string;
    name: string;
    Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

// interface IconSource {
//     sourceName : string;
//     module : Module
// }

export const IconPicker: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (props) => {

    let iconKeys = Object.values(Icons.IconOutline);
    let entries = Object.entries(Icons.IconOutline);

    let iconObjects = [
        {
            sourceName: "Hero Icons Outline",
            module: Icons.IconOutline
        },
        {
            sourceName: "Hero Icons Solid",
            module: Icons.IconSolid
        }];

    let iconOptions: IconOption[] = [];

    iconObjects.forEach(x => {
        Object.entries(x.module).forEach(iconImport => {
            let iconOption = new IconOption();
            iconOption.source = x.sourceName;
            iconOption.name = getReadableName(iconImport[0]);
            iconOption.Component = iconImport[1];
            iconOptions.push(iconOption);
        });

    });

    iconOptions = _.sortBy(iconOptions, [(o) => o.name]);

    const [filteredIcons, setIcons] = React.useState(iconOptions);

    const [searchTerm, setSearchTerm] = React.useState("");


    function getReadableName(name: string): string {
        var result = name.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

        return finalResult;
    }

    function getHighlightedText(text: string, highlight: string) {
        // Split text on highlight term, include term itself into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part)}</span>;
    }

    function updateGrid(event: any) {

        setSearchTerm(event.event.target.value.toLowerCase());
        //setIcons(_.filter(iconOptions, (o) =>  o.name.toLowerCase().includes(event.value.toLowerCase())));
        setIcons(_.filter(iconOptions, (o) => o.name.toLowerCase().includes(event.event.target.value.toLowerCase())));
    }

    return (
        <div className="h-full">
            <div className="p-4 bg-blue-800">
                <TextBox onInput={updateGrid} placeholder="Search icons..." />
            </div>

            <div className="icon-picker bg-indigo-300 h-full">
                {
                    filteredIcons.map(
                        iconOption => (
                            <div key={iconOption.source + '-' + iconOption.name} className="icon-selection inline-block rounded overflow-hidden shadow-lg bg-white m-1 hover:bg-blue-100 cursor-pointer">
                                <div className="icon-wrapper px-2 py-2 text-center">


                                    <iconOption.Component {...props} />
                                    <div className="text-wrapper">
                                        {/* <div className="icon-text">{iconOption.name}</div>
                                        <div className="icon-text">{getHighlightedText(iconOption.name, searchTerm)}</div> */}
                                        <Highlighter
                                        className="icon-text"
                                        highlightClassName="bg-yellow-200"
                                        searchWords={[searchTerm]}
                                        autoEscape={true}
                                        textToHighlight={iconOption.name}
                                    />
                                    </div>


                                </div>
                            </div>
                        )

                    )
                }
            </div>
        </div>
    );
}


