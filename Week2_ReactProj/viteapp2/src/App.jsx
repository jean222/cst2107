import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
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
      <Footer />
      {/* You have to create a footer component and add it here */}
      {/* Your footer component should have social media links, some quick actions like terms and conditions */}
    </div>

  )
}

export default App;