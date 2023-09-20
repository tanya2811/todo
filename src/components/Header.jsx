import React from "react";

import TodoForm from './TodoForm'

import Todos from './Todos'


const Header = () => {

    return (
        <>       
        <header>
            <h1>TodoList</h1>
        </header>
        <TodoForm></TodoForm>
       <Todos></Todos>
               </>
    )
}

export default Header;