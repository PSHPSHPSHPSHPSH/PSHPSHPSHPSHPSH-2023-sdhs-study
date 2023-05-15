import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './main/index';
import Todos from './todos';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/todos' element={<Todos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;