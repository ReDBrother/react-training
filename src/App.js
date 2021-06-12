import { Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import Counters from './first/Counters';
import FileManager from './second/FileManager';
import Buttons from './first/practice/Buttons';

const Home = () => {
  return (<>
    <Card>
      <Card.Body>
        <Card.Title>Counters</Card.Title>
        <Card.Text>Try learn some basics about React (Stack: React).</Card.Text>
        <Button variant="primary"><NavLink className="text-white" to="/counters">Show</NavLink></Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>File Manager</Card.Title>
        <Card.Text>Learn how works redux with components (Stack: React, Redux Toolkit, axios)</Card.Text>
        <Button variant="primary"><NavLink className="text-white" to="/file-manager">Show</NavLink></Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Practices React</Card.Title>
        <Card.Text>Practice</Card.Text>
        <Button variant="primary"><NavLink className="text-white" to="/buttons">Show Buttons Practice</NavLink></Button>
      </Card.Body>
    </Card>
  </>);
};

function App() {
  return (
    <BrowserRouter>
      <header>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/counters" render={(props) => <Counters {...props} />} />
          <Route exact path="/file-manager" render={(props) => <FileManager {...props}/>} />
          <Route exact path="/buttons" render={() => <Buttons count={3} />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
