import "../../CSS/training.css"
import Navbar from "../../Components/Navbar/Navbar"
import training_data from "../../JS_components/training_data"

export default function Training () {
    return(
        <>

        <Navbar/>
            <div className="training" id="training">
                <div className="training-title">
                    <h1> ANCHOR ACADEMY TRAINING</h1>
                </div>
                <div className="training-container">
                        {training_data.map((training, training_index)=>{
                            return <div className="training-format" key={training_index}>
                                <h1>{training.training_type}</h1>
                                <h3>{training.description}</h3>
                                <p>{training.pricing}</p>
                            </div>
                        })}

                </div>
            </div>
        </>
    )
}