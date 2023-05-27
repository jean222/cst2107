import './App.css'
import UncontrolledForm from './components/uncontrolledForms/UncontrolledForm'
import ControlledForms from './components/controlledForms/ControlledForm'

function App() {

  return (
    <div className='main-container'>
      <ControlledForms />
      <UncontrolledForm />
    </div>
  )
}

export default App
