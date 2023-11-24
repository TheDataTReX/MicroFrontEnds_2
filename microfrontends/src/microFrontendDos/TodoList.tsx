import React from 'react';

const TodoList: React.FC = () => {
    return (
        <div className="todo-list">
            <h2>Lista de Tareas</h2>
            <ul>
                <li>Tarea 1</li>
                <li>Tarea 2</li>
                <li>Tarea 3</li>
                {/* Más tareas */}
            </ul>
            <button>Añadir Tarea</button>
        </div>
    );
};

export default TodoList;