import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category'
import Todo from './components/Todo'
import Home from './components/Home';
import Resume from './components/Resume'

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/category/:id' component={Category} />
                <Route exact path='/blog/:id' component={BlogDetail} />
                <Route exact path='/todo' component={Todo}/>
                <Route exact path= '/resume' component={Resume}/>
            </Switch>
        </Layout>
    </Router>
);

export default App;