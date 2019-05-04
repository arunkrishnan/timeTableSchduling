import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import About from './components/About';
import Users from './components/Users';
import TeacherDetails from './containers/teacherDetails/Details';
import App from './App';
export default Routes => {
  return (
    <Switch>
      <Route exact path="/" component={TeacherList} />
      <Route exact path="/teachers" component={TeacherList} />
      <Route exact path="/teachers/:teacherId" component={TeacherDetails} />
      <Route exact path="/about" component={About} />
      <Route exact path="/users" component={Users} />
    </Switch>
  );
};
