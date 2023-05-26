import React from 'react'; 
import { collegeName, collegeStudentName } from './constant';

// Class based

class App extends React.Component{
  render(){
    return(
      <div>
        {/* You can inject a variable in HTML by wrapping it inside a curly braces */}
        {collegeStudentName} studies in {collegeName}
        
      </div>
    )
  }
}

// export class MyClass extends React.Component{
//   render(){
//     return(
//       <div>
//         My Class HTML
//       </div>
//     )
//   }
// }


export default App;



// Function based




