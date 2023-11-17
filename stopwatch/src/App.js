import logo from './logo.svg';
import './App.css';
import Stopwatch from "./Stopwatch";
import TimerWrapper from "./Timer/TimerWrapper";


function App() {
  const onExpire = () => {
    console.log("Expired");
  };

  return (
    <div class="row">
    <div class="column">
      <Stopwatch />
    </div>
    <div class="column">
      <TimerWrapper onExpire={onExpire} duration={10 * 1000} />
  </div>
  </div>
  );
}

export default App;
