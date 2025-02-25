import "../Testimonies/Testimony.css"
import testimony_data from "../../JS_components/testimony_data"

export default function Testimony () { 
    return(
        <>
            <div className="testimony-container">
                    {testimony_data.map((testimony, testimony_index)=>{
                            return <div className="testimony-format" key={testimony_index}>
                                <img src= {testimony.image} alt="" />
                                <h2>{testimony.name}</h2>
                                <h3>{testimony.relationship_type}</h3>
                                <p>{testimony.description}</p>
                            </div>
                        })
                    }
            </div>
        </>
    )
}