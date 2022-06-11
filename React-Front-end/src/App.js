import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className="container my-5">
            <Routes>
              <Route exact path="/" element= {<ListEmployeeComponent />}> </Route>
              <Route exact path="/employees" element= {<ListEmployeeComponent />}> </Route>
              <Route exact path="/addEmployee/" element= {<CreateEmployee />}> </Route>   
              <Route exact path="/addEmployee/:id" element= {<CreateEmployee/>}> </Route>
              
            </Routes>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
