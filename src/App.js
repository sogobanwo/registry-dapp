import { useState } from "react";
import InputForm from "./components/InputsForm";
import EachPersonalDetail from "./components/EachPersonDetail";

function App() {
  const [details, setDetails] = useState("");
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="App">
      {showForm ? (
        <InputForm setDetails={setDetails} setShowForm={setShowForm}/>
      ) : (
        <>
          <h2>All your details comes here</h2>
          <EachPersonalDetail message={details} />
          <button className="btn" onClick={() => setShowForm(true)}>
            Create New Details
          </button>
        </>
      )}
    </div>
  );
}

export default App;
