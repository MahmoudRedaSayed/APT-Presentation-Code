import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
function Jokes(){
    const [joke,setJoke]=useState("مره واحد محشش قاعد بيحشش مع مراته لغايه ما نسيوا نفسهم وفجأه حد خبط عليهم فقامت الزوجه وقالت جوزى. فقام جوزها ونط من الشباك");
    const getRandom=()=>{

            fetch("http://localhost:8080/jokes").then(response=>{
            if(response.ok)
            {
                return response.json()
            }
            }).then(data=>{
                console.log(data);
                setJoke(data.data);
            })
    }

    const getRandom2=()=>{
        const data1=
        {
            'Name':"mahmoud",
        }
        fetch("http://localhost:8080/jokes",{
            mode: 'no-cors',
            method:'POST',
            headers:
            {
                'Content-Type':"application/json"
            },
            body:JSON.stringify(data1)
        }).then(response=>{
            if(response.ok)
            {
                return response.json();
            }
            }).then(data=>{
                console.log(data);
                console.log(JSON.stringify(data1));
            })
}

    return(
        <div>
    <div className="container" style={{"margin":"10vh auto"}}>
<div className="container text-center">
</div>
<div className="container">
    <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
            <div className="row text-center text-light">
                <h1>Jokey Dokey</h1>
                <h6>If you want to break your mood, just press the button below👇</h6>
            </div>
            <div className="alert alert-danger text-center" role="alert">
            <strong>⚠ Alert: Ur gonna die laughing !</strong> 
            <a onClick={getRandom} className="btn btn-lg btn-danger text-center">Click Me!</a>
        </div></div>
        <div className="col-lg-4"></div>
    </div>
    <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
            <div className="card" style={{"margin": "auto"}}>
                <div className="card-body bg-warning" id="joke-card">
                    <h5 className="card-title">Incomin Joke</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Joke #</h6>
                    <p className="card-text"><strong>{joke}</strong></p>
                    <a href="#" className="card-link text-success"><i className="fas fa-thumbs-up"></i></a>
                    <a href="#" className="card-link text-danger"><i className="fas fa-thumbs-down"></i></a>
                </div>
            </div>
        </div>
        <div className="col-lg-4"></div>
    </div>
</div>
</div>
</div>)
}
export default Jokes;