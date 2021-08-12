import LoginForm from "./Component/LoginForm";
import RegistrationForm from "./Component/RegistrationForm ";
import Home from "./Component/Home"
import Password from "./Component/Password"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/forgotpassword" component={Password} />
        <Route path="/userdetails" component={UserDetails} />
      </Switch>
    </BrowserRouter>

  )
}