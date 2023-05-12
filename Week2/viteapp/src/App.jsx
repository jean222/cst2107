import React from 'react';
import { collegeName, collegeStudentName } from './constant';


// Class based
class App extends React.Component {
  render() {
    return (
      <div>
        {/* You can inject a variable in HTML by wrapping it in a curly baracket */}

        {collegeStudentName} studies in this {collegeName}
      </div>
    )
  }
}


export default App;




// Function based