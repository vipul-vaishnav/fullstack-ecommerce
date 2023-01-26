import { Dispatch, SetStateAction } from "react";

export interface ISideNav {
    hideSideNav: Dispatch<SetStateAction<boolean>>
    handleModeChange: () => void
}