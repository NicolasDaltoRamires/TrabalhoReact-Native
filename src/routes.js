import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/main';
import Cadastro from './pages/cadastro';

const Routes = createStackNavigator({
    Login,
    Main,
    Cadastro
});

export default Routes;
