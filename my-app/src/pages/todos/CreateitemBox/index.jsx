import Button from '../../../components/Button';

import * as S from './styled';

function CreateItemBox({onChange}) {
    const handleInputValue = (e) => {
        onchange(e.target.vlaue);
    };


    return (
        <S.InputBox>
            <S.Input placeholder='To do를 입력해주세요.' onchange={handleInputValue} />
            <Button onclick={createItem}>등록</Button>
        </S.InputBox>
    );
}

export default CreateItemBox;