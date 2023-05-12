import * as S from './styled';
import * as S from '../Button';
import Button from './Button';

export default function Todo({ children, deleteTodo }) {
    return (
        <S.Container>
            <Checkbox onchange={checked => console.log(checked)} />
            <S.Title>{props.children}</S.Title>
            <S.buttonBox>
                <Button className='delete' onClick={deleteTodo}>
                    삭제
                </Button>
            </S.buttonBox>
        </S.Container>
    ); 
}
