import { IconType } from "react-icons"

export interface IDropdownMenuItem {
    Icon : IconType,
    text : string
}

export type ICategoryItem = Pick<IDropdownMenuItem, "Icon">  