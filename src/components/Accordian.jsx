import { useState } from "react";
import accordionData from "./data";
import "./Style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpymultiple=[...multiple]
    let findIndexOfCurrentId=cpymultiple.indexOf(getCurrentId)
    if(findIndexOfCurrentId===-1){
        cpymultiple.push(getCurrentId)
    }
    else{
        cpymultiple.splice(findIndexOfCurrentId,1)
    }

    setmultiple(cpymultiple)
    console.log(selected,multiple);
    
  }

  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        >
          Enable multi selection
        </button>
        <div className="accordian">
          {accordionData && accordionData.length > 0 ? (
            accordionData.map((dataitem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultiSelection(dataitem.id)
                      : () => handleSingleSelection(dataitem.id)
                  }
                >
                  <h3>{dataitem.title}</h3>
                  <span>+</span>
                </div>
                
                {
                    enableMultipleSelection ? multiple.indexOf(dataitem.id)!==-1 && (<div className="content">{dataitem.content}</div>):
                    selected === dataitem.id && (<div className="content">{dataitem.content}</div>)
                }
              </div>
            ))
          ) : (
            <div>data not found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
