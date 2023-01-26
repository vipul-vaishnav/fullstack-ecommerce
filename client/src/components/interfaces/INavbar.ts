import { Dispatch, SetStateAction } from "react"

export interface INavbar {
    handleModeChange: () => void
    showSideNav: Dispatch<SetStateAction<boolean>>
}