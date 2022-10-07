import logo from './logo.svg';
import './App.css';
import ConstructorDemo from './Components/Mounting Phase Demos/ConstructorDemo';
import ParentComponent from './Components/Mounting Phase Demos/Construordemo2';
import DidMountDemo from './Components/Mounting Phase Demos/ComponentDidMountdemo';
import APICallsDemo from './Components/Mounting Phase Demos/CallingAPIDemo';
import ShouldUpdatedemo from './Components/Updating Phase Demos/ShouldUpdatedemo';
import GetSnapshotDemo from './Components/Updating Phase Demos/getSnapshotDemo';
import UnMountDemo from './Components/UnMountingPhase Demos/UnmountDemo';
function App() {
  return (
    <div className="App">
      {/* <ConstructorDemo /> */}
    {/* <ParentComponent></ParentComponent> */}
    {/* <DidMountDemo />
    <APICallsDemo></APICallsDemo> */}
    {/* <ShouldUpdatedemo></ShouldUpdatedemo> */}
    {/* <GetSnapshotDemo /> */}
    <UnMountDemo />
    </div>
  );
}

export default App;
