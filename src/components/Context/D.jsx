import { useContext, useState } from "react"
import { UserContext } from "./A"

export default function D () {
    const user = useContext(UserContext)
    return (
        <>
            <div>{user} from D</div>
        </>
    )
}