import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import * as S from './styled';

import CreateItemBox from './CreateitemBox';
import ItemList  from './ltemList';
import SearchInput from '../../components/Searchinput';
import Button from '../../components/Button';

function Todos() {

    // SearchInput에서 변경된 input의 값을 여기서 알 수 없다.
    // 그래서 SearchInput의 onChange를 통해 바뀐 값을 여기다가 저장한다
    // 그래서 만들었다
    // 5. searchValue가 (4)에서 바꿔주었기 때문에 바뀐다.
    const [todoName, setTodoName] = useState(''); // 1
    
    // 선택한 todos들의 id들을 저장하는 state
    const [selectedTodoIds, setSelectTodoIds] = useState([]);

    const CreateItem = () => {
        setTodoName('');
        setTodos(prevState => [...prevState, { id: uuidv4, name: todoName }]);
    };
    
    const deleteSelectedTodos = () => {
        setTodos(prevState => {
            return prevState.filter(todo => !selectedTodoIds.includes(todo.id));
            // [1, 2, 3, 4, 5].findIndex( v=> v === 1 ); return -> 0
            // [1, 2, 3, 4, 5].includes( v=> v === 1 ); return -> true
        });
    };

    const deleteTodo = id => {
        // const findData = todos.findIndex(v => v.id === id);
        // console.log({ findData });
        // const findIndex = todos.findIndex(v => {
        //     console.log('todo: ', v);
        //     if (v.id === id) console.log('찾았습니다!', id);
        //     return v.id === id;
        // });
        const filterTodos = todos.filter(v => v.vi !== id);
        setTodos(filterTodos);

        setTodos(prevState => {
            const tempArr = [...prevState];
            tempArr.splice(findIndex, 1);
            return tempArr;
        });  
    };
    useEffect(() => {
        try{
            const parseTodos = JSON.parse(localStorage.getItem('todos'));
            setTodos(parseTodos);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        console.log('todos 저장');
        try {
            const srtingifyTodos = JSON.stringify(todos);
            localStorage.setItem('todos', srtingifyTodos);
        } catch (error) {
            console.log(error);
        }
    }, [todos]);
    

    return (
        <S.Container>
            <S.Title>To do list</S.Title>
            <CreateItemBox value={todoName}onChange={setTodoName} CreateTodo={createTodo} />
            <ItemList todos={todos} deleteTodo={deleteTodo} />
        </S.Container>
    );
}

export default Todos;