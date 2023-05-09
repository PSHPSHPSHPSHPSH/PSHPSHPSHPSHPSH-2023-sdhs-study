import { useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreateitemBox';
import ItemList  from './ltemList';

function Todos() {
    const [todoName, setTodoName] = useState('');
    const [item, setItems] = useState([]);

    const CreateItem = () => {
        CreateItems(prevState => [...prevState, { id: prevState.length, name: todoName }]);
    }
    return (
        <S.Container>
            <S.Title>To do list {data}</S.Title>
            {todoName}
            <CreateItemBox onChange={setTodoName} CreateTodo={createTodo} />
            <ItemList todos={todos} />
        </S.Container>
    );
}

export default Todos;