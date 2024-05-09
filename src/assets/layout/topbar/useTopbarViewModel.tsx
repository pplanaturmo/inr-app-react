import { useResolve } from '@movicoders/di';
import { LoginUseCase } from '../../../../application/use-cases/LoginUseCase';
import { ROUTER_PATHS } from '../../../../constants';
import { useNavigate } from 'react-router';


export default function useTopbarViewModel() {

    const loginUseCase = useResolve(LoginUseCase);
    const navigate = useNavigate();
    
    const logout = () => {
        loginUseCase.logout();
        navigate(ROUTER_PATHS.login);
    }

    return {
        logout
    };
}
