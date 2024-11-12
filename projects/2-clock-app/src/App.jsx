import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./components/AppName";
import CurrentTime from "./components/CurrentTime";
import Headlines from "./components/Headlines";

function App() {
  return (
    <center>
      <AppName />
      <Headlines />
      <CurrentTime />
    </center>
  );
}

export default App;
