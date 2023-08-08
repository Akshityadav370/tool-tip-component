import "./App.css";
import ToolTip from "./ToolTip";

function App() {
  return (
    <div className="App">
      <h1 style={{color:"#193c75"}}>React Tool Tip Component !</h1>
      {/* Tool Tip : Change the placement in the props */}
      <ToolTip text={"Hiii ! ... I'm a tool tip !"} position={tooltipStyles.bottom}>
        <button id="hover-btn">Hover Over Me...</button>
      </ToolTip>
    </div>
  );
}


// To change the placement of tooltip : left, right, top, bottom
const tooltipStyles = {
  top: {
    width: 200,
    // height: 25,
    // textAlign: "center",
    fontSize: 15,
    marginLeft: 600,
    backgroundColor: "#0c2040",
    color: "white",
    marginTop: -100,
    borderRadius: 10,
    textAlign: "left",
    padding: 10,
  },
  bottom: {
    width: 200,
    // height: 25,
    // textAlign: "center",
    fontSize: 15,
    marginLeft: 600,
    backgroundColor: "#0c2040",
    color: "white",
    marginTop: 20,
    borderRadius: 10,
    textAlign: "left",
    padding: 10,
  },
  right: {
    width: 200,
    // height: 25,
    // textAlign: "center",
    fontSize: 15,
    marginLeft: 800,
    backgroundColor: "#0c2040",
    color: "white",
    marginTop: -50,
    borderRadius: 10,
    textAlign: "left",
    padding: 10,
  },
  left: {
    width: 200,
    // height: 25,
    // textAlign: "center",
    fontSize: 15,
    marginLeft: 400,
    backgroundColor: "#0c2040",
    color: "white",
    marginTop: -50,
    borderRadius: 10,
    textAlign: "left",
    padding: 10,
  },
};

export default App;
