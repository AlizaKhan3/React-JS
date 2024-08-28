function Card({v, sendDataToParent}){
    // console.log(props, "props")
    console.log({v})
    return(
      <div>
        <h2>{v}</h2>
        <button onClick={() => sendDataToParent("Aliza received")}>get me here</button>
      </div>
    )
  }
  
export default Card