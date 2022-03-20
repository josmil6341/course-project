import { Grid } from "@react-ui-org/react-ui";
import TopBar from "./TopBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Grid columns="1" rows="4">
        <h2>Order again</h2>
        <h2>Trending</h2>
        <h2>Recently Viewed</h2>
        <h2>Deals</h2>
        {/* <h2>Order again</h2>
        <h2>Order again</h2> */}
      </Grid>
    </div>
  );
}

export default App;
