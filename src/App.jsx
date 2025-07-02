import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ComponentDidMount from "./components/ComponentDidMount";
import UpdatingExample from "./components/UpdatingExample";
import List from "./components/List";
import Timer from './components/Timer'
import A from './components/Context/A'
import UseCallback from './components/UseCallback'
import ClassExample from './components/LifeCycle/ClassExample'
import UserProfile from './components/LifeCycle/UserProfile'
import LifecycleExample from "./components/LifeCycle/LifecycleExample";
import TodoList from "./components/LifeCycle/TodoList";
import ApiCall2 from "./components/LifeCycle/ApiCall2";
import Mounting from "./components/LifeCycle/Mounting";
import MyClassComponent from "./components/LifeCycle/MyClassComponent";

function App() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 },
        { id: 6, name: "peach", calories: 98 },
    ];
    return (
        <>
            {/* <ProfileCard title="title" caption="caption" picture="https://placehold.co/400x300" ></ProfileCard> */}
            {/* <UpdatingExample> </UpdatingExample> */}
            {/* <UserGreeting isLoggedIn={true} name="prem"></UserGreeting> */}
            {/* <List items={fruits} category="Fruits"></List> */}
            {/* <ClassExample name="Prem"></ClassExample> */}
            {/* <ApiCall2></ApiCall2> */}
            <Mounting count={0}></Mounting>
            {/* <MyClassComponent count={2}></MyClassComponent> */}
        </>
    );
}

export default App;
