import { useParams } from "react-router-dom";
import "./Card.css"
import pic2 from "./"
function QAPics(props) {
    const { id } = useParams();
    var message = "Pic number is 10 or less!";
    var pic;
    var id2 = Number(id);
    if (id2 === 1) {
        pic = "/src/pic1.png";
    }
    else if (id2 === 2)
        pic = "/src/pic2.png"
    
    console.log(pic);
    if (id > 10) {
        message = "Pic number is more than 10!"
    }
    return <div className="card">
        This is picture number: {id} <br /> and {message}
        {pic && <img src="./pic2.png" />}
    </div>;
};

export default QAPics;
