import React, { Component } from 'react'; 
import _profile, {_handleName} from './profile/profile';


var profi ={ fullName:"hafedh", 
    bio:"mon_bio",
    profession:"mon_profession"
}

function App() {

  return (
    <div className="App">
    
     <_profile profi={profi.fullName}/><br></br>
     <_profile profi={profi.bio}/><br></br>
     <_profile profi={profi.profession}/><br></br><br></br>
     <_handleName profi={profi.fullName}/>
     
    </div>
  );
}

export default App;
