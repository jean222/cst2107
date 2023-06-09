import './App.css'
import UncontrolledForm from './components/uncontrolledForms/UncontrolledForm'
import ControlledForms from './components/controlledForms/ControlledForms'

function App() {

  return (
    <div className='main-container'>
      <h1>UNCONTROLLED FORM</h1>
      <ControlledForms />
      <hr></hr>
      <h1>UNCONTROLLED FORM</h1>
      <UncontrolledForm />
    </div>
  )
}

export default App
