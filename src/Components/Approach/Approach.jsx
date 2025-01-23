import "../../CSS/home.css"
import "../../assets/logo.jpeg"
export default function Approach (){ 
    return ( 
        <>
        <div className="approach">
                <h1 className="title"> Our Approach</h1>

                <div className="description">
                    <p>We want your kids to enjoy the environment they are in, where they can learn the fundamentals of the game of soccer/football. They are to be challenged to develop his or hers full potential and to show them the way to higher skill levels. We are teaching them to use creative ways to solve game situations and to develop their technical ability and soccer IQ.
                        We emphasize value of commitment, humbleness and solidarity in pursuit of continuos improvement. We also want our players to have fun on the field and, at the end of each practice to want more.
                        Developing their characters to become good role models in the community is one of the goals of this program as well.
                    </p>
                </div>

                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                    
        </div> 
        </>
    )
}