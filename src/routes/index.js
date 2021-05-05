import LoginComponent from '../containers/Login/index'
import TokenComponent from '../containers/Token/index'
import PinComponent from '../containers/Pin/index'
import FormComponent from '../containers/Form/index'

const routes = [
  {
    path: '/auth/register',
    component: LoginComponent,
    title: 'Register',
  },
  {
    path: '/auth/token',
    component: TokenComponent,
    title: 'Token',
  },
  {
    path: '/auth/pin',
    component: PinComponent,
    title: 'Pin',
  },
  {
    path: '/auth/form',
    component: FormComponent,
    title: 'Form',
  },
]

export default routes
