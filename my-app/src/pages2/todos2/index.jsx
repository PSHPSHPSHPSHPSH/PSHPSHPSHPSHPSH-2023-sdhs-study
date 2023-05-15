import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import {createTodo } from '../../reduce/todos';

import * as S from './styled';

import CreateItemBox from './CreateitemBox';
import ItemList  from './ltemList';
import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';

function Todos() {
    const [todoName, setTodoName] = useState('');
    const [tempTodos, setTodos] = useState([]);
    
    const dispatch = useDispatch();

    const { todos } = useSelector(state => state.todos);

    // SearchInput에서 변경된 input의 값을 여기서 알 수 없다.
    // 그래서 SearchInput의 onChange를 통해 바뀐 값을 여기다가 저장한다
    // 그래서 만들었다
    // 5. searchValue가 (4)에서 바꿔주었기 때문에 바뀐다.
    const [searchValue, setSearchValue] = useState(''); // 1
    
    // 선택한 todos들의 id들을 저장하는 state
    const [selectedTodoIds, setSelectedTodoIds] = useState([]);

    const handleCreateTodo = () => {
        setTodoName('');
        dispatch(createTodo({ id: uuidv4(), name: todoName }));
        // setTodos(prevState => [...prevState, { id: uuidv4(), name: todoName }]);
    };
    
    const deleteSelectedTodos = () => {
        setTodos(prevState => {
            return prevState.filter(todo => !selectedTodoIds.includes(todo.id));
            // [1, 2, 3, 4, 5].findIndex( v=> v === 1 ); return -> 0
            // [1, 2, 3, 4, 5].includes( v=> v === 1 ); return -> true
        });
    };

    const handleSelectedTodoDelete = id => {
        dispatch(deleteTodo(id));
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
            dispatch(setTodos(parseTodos));
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
            <SearchInput
            // 3. SearchInput의 handleValue에서 실행시켜준 함수
            onChange={value => {
                // 4. SearchInput의 onChange에서 넣어준 value
                setSearchValue(value);
            }}
            />
            <CreateItemBox value={todoName} onChange={setTodoName} CreateTodo={createTodo} />
            <Button onClick={handleSelectedTodoDelete}>선택 돈 To do 삭제</Button>
            {/*
            6. 4에서 searchValue를 바꿔 주었고, 그 값을
            ItemList에 props로 전달해준다.
            그래서 ItemList에서 검색 input의 값을 사용할 수 있게 되었다.
            */}
            <ItemList
                todos={todos}
                searchValue={searchValue}
                deleteTodo={handleTodoDelete}
                setSelectedTodoIds={setSelectedTodoIds}
            />
        </S.Container>
    );
}

export default Todos;