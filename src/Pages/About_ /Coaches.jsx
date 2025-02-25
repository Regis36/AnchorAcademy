import coach_data from "../../JS_components/Coaches_data";
import Navbar from "../../Components/Navbar/Navbar";
import "../../CSS/coaches.css";

export default function Coaches () {
    return(
        <>
        <Navbar/>
            <div className="coaches-container">
                    {coach_data.map((coach, coach_index)=>{
                            return <div className="coaches-format" key={coach_index}>
                                <img src= {coach.image} alt="" />
                                <h2>{coach.name}</h2>
                                <h3>{coach.Position}</h3>
                                <h4>{coach.accolades}</h4>
                                <p>{coach.description}</p>
                            </div>
                        })
                    }
            </div>
        </>
    )
}