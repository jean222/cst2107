import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
// Function 1
// function App() {
//   return(
//     <h1> Hello World!</h1>
//   )
// }

// ORRR

// Function 2
const App = () => {
  return(
    <div>
      <Header />
      <Banner />
    </div>
  )
}

export default App;