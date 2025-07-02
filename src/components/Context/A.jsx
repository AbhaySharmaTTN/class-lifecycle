import { createContext, useContext, useEffect, useState } from "react";
import B from "./B";

export const UserContext = createContext();

export default function A() {
    const [user, setUser] = useState("Prem");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div>
                {/* {user}
                <UserContext.Provider value={user}>
                    <B></B>
                </UserContext.Provider> */}
                <button onClick={()=>setModalIsOpen(true)}>Open Modal</button>
            </div>
            {modalIsOpen && <NewModal closeModal={setModalIsOpen}/>}
        </>
    );
}

const NewModal = ({closeModal}) => {
    useEffect(() => {
        const id = setInterval(() => {
            console.log("hello");
        }, 1000);

        return () => {
            clearInterval(id);
            console.log('unmounting the component...')
        }
    }, []);
    return(
        <div style={{position: "absolute", height: 300, width: 300, backgroundColor: 'red', top: '40%', left: '40%', borderRadius: 10}}>
            <h1>{"Hallo there, it is a modal.... :}"}</h1>
            <button onClick={()=>closeModal(false)}>Close</button>
        </div>
    )
}
