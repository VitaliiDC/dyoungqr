import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Main from './component/main/mainContainer'
import T from './component/t/tContainer'


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App" >
          <div className="background"></div>
          <Switch>
            <Route path="/t" component={T} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
