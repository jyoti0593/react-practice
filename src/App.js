import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComponent from './Components/ParentComponent';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
// import LifecycleA from './Components/LifecycleA';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <PureComp/> */}
      {/* <ParentComponent/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo /> */}
    <ErrorBoundary><Hero heroName='Batman' /></ErrorBoundary>
    <ErrorBoundary><Hero heroName='Joker' /></ErrorBoundary>
    </div>
  );
}

export default App;
