import React, {useState} from "react";
function App() {
  const [field, setfield] = useState('')

  const formatRut = (e) => {
    const {target} = e;
    const {value} = target
    let rut = value.length >= 11 ? e.target.value.replace(/[^\dkK]/g, "") : e.target.value.replace(/[^\d]/g, "") ;
    if(field.length > e.target.value.length) {
      setfield(e.target.value)
    }else {
      switch(rut.length) {
        case 1: 
          rut = e.target.value.replace(/[^\d]/g, "");
          setfield(rut.replace(/(\d{1,2})/, "$1."))
          break;
        case 4:
          rut = e.target.value.replace(/[^\d]/g, "");
          setfield(rut.replace(/(\d{1})(\d{3})/, "$1.$2."))
          break 
        case 7:
          rut = e.target.value.replace(/[^\d]/g, "");
          setfield(rut.replace(/(\d{1})(\d{3})(\d{3})/, "$1.$2.$3-"))
          break
        case 8:
          rut = e.target.value.replace(/[^\dkK]/g, "");
          setfield(rut.replace(/(\d{1})(\d{3})(\d{3})([\dkK]{1})/, "$1.$2.$3-$4"))
          break
        case 9:
          rut = e.target.value.replace(/[^\dkK]/g, "");
          if(/(\d{2})(\d{3})(\d{3})([\dkK]{1})/.test(rut)) {
            setfield(rut.replace(/(\d{2})(\d{3})(\d{3})([\dkK]{1})/, "$1.$2.$3-$4"))
          }
          break
        default: 
          if(e.target.value.length <= 12) {
            e.target.value = e.target.value.replace(/[^\d.-]/g, "");
            setfield(e.target.value)
          }
      }
    }
    
  }

  return (
    <div className="App">
        <input type="text" value={field} onChange={formatRut} />
    </div>
  );
}

export default App;
