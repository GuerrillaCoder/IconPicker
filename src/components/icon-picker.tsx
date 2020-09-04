import React from "react";
import * as _ from "lodash";
import * as Icons from '../icons/index'
import { IconPickerSearch } from "./icon-picker-search";


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

    function getReadableName(name: string): string {
        var result = name.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

        return finalResult;
    }

    return (
        <>
            <IconPickerSearch iconOptions={iconOptions} />
            <div className="icon-picker bg-indigo-300">
                {
                    iconOptions.map(
                        iconOption => (
                            <div key={iconOption.source + '-' + iconOption.name} className="icon-selection inline-block rounded overflow-hidden shadow-lg bg-white m-1 hover:bg-blue-100 cursor-pointer">
                                <div className="icon-wrapper px-2 py-2 text-center">


                                    <iconOption.Component {...props} />
                                    <div className="text-wrapper">
                                        <div className="icon-text">{getReadableName(iconOption.name)}</div>
                                    </div>


                                </div>
                            </div>
                        )

                    )
                }
            </div>
        </>
    );
}


