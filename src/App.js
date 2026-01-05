import React from "react";
function App() {
  const user = {
    firstname: "Rakesh",
    lastname: "Kumar",
  };

  return (
    // <div className="App">
    //   <h1>hello {new Date().toLocaleTimeString()}</h1>
    //   <h1>
    //     Hello {user.firstname} {user.lastname}
    //   </h1>
    //   <printName />
    // </div>

    <section>
      <h1>hello {new Date().toLocaleTimeString()}</h1>
      <h1>
        Hello {user.firstname} {user.lastname}
      </h1>
    </section>
  );
}

export default App;
