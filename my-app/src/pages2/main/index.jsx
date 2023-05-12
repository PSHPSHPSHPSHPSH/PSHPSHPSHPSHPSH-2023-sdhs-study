import { Link, link } from 'react-router-dom';

import Button from '../..';

import * as S from './styled';
function Main(){
    return(
        <S.Container>
            <S.MainWapper>
                <div>메인 페이지</div>
                <Button><Link to='./todos'>만들기</Link></Button>
            </S.MainWapper>
        </S.Container>
    );
}

export default Main;