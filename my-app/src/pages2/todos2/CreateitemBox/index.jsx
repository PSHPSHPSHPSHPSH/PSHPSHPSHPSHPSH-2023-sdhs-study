import Button from '../../..';

import * as S from './styled';

function CreateItemBox({value, onChange, createTodo}) {
    const handleInputValue = e => {
        onchange(e.target.vlaue);
    };


    return (
        <S.InputBox>
            <S.Input 
            value={value}
            placeholder='To do를 입력해주세요.' 
            onchange={handleInputValue} />
            <Button onclick={createTodo}>등록</Button>
        </S.InputBox>
    );
}

export default CreateItemBox;