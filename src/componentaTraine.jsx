import { NavLink } from "react-router-dom"

const componentaTraine = (props) => {
    return <div>
        {elements}  
    </div>
}
const componentaTraine2 = (props) => {
    return <div>
        <NavLink to='path'>{props.name} </NavLink>


    </div>
}
let names = [
    { id: 1, name: 'vasya' },
    { id: 2, name: 'vasya11' },
    { id: 3, name: 'vasya22' },
]

let elements = names.map((nameeees) => <componentaTraine2 name={nameeees.name} id={nameeees.id} />);

//тут сидят эти обьекты с имем и айди которые ниже
[
    <componentaTraine2 name={names.name[0]} id={names.id[0]} />,
    <componentaTraine2 name={names.name[0]} id={names.id[0]} />,
    <componentaTraine2 name={names.name[0]} id={names.id[0]} />

]

//нунжо из массива обекта (данных) получить массив имен и айди

