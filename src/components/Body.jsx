import Data from "./Data"

export default function Body(props) {
    return (
        <div className="Body--container">
            <img src={props.destination.imageUrl} className="destination--img" />
            <div className="RestofBody--container">
                <div className="url--location">
                    <p>{props.destination.location}</p>
                    <a href={props.destination.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </div>
                <h2>{props.destination.title}</h2>
                <div className="startToEnd">
                    <p>From: {props.destination.startDate}</p>
                    <p>To: {props.destination.endDate}</p>
                </div>
                <p className="description">{props.destination.description}</p>
            </div>
        </div>
    )
}