import { useContext } from 'react';
import { Link } from "react-router-dom"
import { Context } from '../contexts/Context';

export const ShowData = () => {
    const data = useContext(Context);
    return (
        <div>
            Tela ShowData de {data.name}
            <br />
            <Link to="/">Voltar para SignUp</Link>
        </div>
    )
}

