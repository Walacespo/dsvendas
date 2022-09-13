import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
//import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Rota = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            
        </BrowserRouter>
    );
}

export default Rota;
