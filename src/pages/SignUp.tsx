import { useContext } from 'react';
import { Link } from "react-router-dom"

import { Context } from '../contexts/Context';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);

    const handleChangeName = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload:{
                    name: state.user.name === 'Pedro' ? 'Sergio Fii' : 'Pedro'
                    }
        });
    }

    return (
        <div>Tela SignUp de {state.user.name} que tem {state.user.age} anos
            <button onClick={handleChangeName}>
                Trocar nome para {state.user.name === 'Pedro' ? 'Sergio Fii' : 'Pedro'}
                </button>
            <br/>
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    );
}

