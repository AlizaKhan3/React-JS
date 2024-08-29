import AppLayout from "../components/layout";
import AppCard from "../components/card";
import React from 'react'
import SimpleCard from "../components/simpleCard";

//New React

// function Dashboard() {
//     function UpdateName(){
//         // var name = "Khans Layout"; 
//         // console.log("value is updating in console-->", name)
//         const updateNameVal = document.getElementById("name");
//         updateNameVal.innerHTML = "Khans Layout Panel"
//         console.log("value is updating NOW in Screen-->", updateNameVal.value);

//     }
//     return (
//         <div className="main">
//             <AppLayout titl e="This is a prop">
//                 {/* Children inside layout */}
//                 <div>
//                     <h1 id="name">Alizas layout</h1>
//                     <button onClick={()=> UpdateName()}>Click me to update value</button>
//                     <AppCard></AppCard>
//                     {/* <SimpleCard></SimpleCard> */}
//                 </div>
//             </AppLayout>
//         </div>
//     )
// }

//Old react
class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1,
            data: {}
            // name: "Aliza",
            // age: 19
        }
        // console.log("constructor runs first");
    }

    getData() {
        // return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            // .then(json => resolve(json))
            .then(json => this.setState({ data: json }))
        // })
    }


    componentDidMount() {  //Use this method after fetching data from API to get in console then render it in screen
        this.getData()
    }


    static getDerivedStateFromProps(props, state) {   //gets the updated state
        console.log("milgaya number", props, state)
    }


    shouldComponentUpdate() {//this method decides whether our component should render or not
        return true; //render code will run
        //return false;   //render code will not run
        //it takes boolean value only True/fale
    }


    render() {
        // this.getData()  no initial call for fetching data is possible in react in RENDER do this in ComponenetDidMount
        console.log("state-->", this.state)
        return (
            <div>
                <AppCard></AppCard>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.setState({
                    counter: this.state.counter + 1
                })}>Hello, Update Number</button>

                <h4>{this.state.data.title}</h4>
                <p>{this.state.data.description}</p>
                <img src={this.state.data.image} style={{ width: "100px" }}></img>
                <p>{this.state.data.image}</p>

                {/* <h1 title="khan">Aliza</h1>
            <button onClick={()=> UpdateName()}>Update me</button> */}
            </div>
        )
    }
}



export default Dashboard;