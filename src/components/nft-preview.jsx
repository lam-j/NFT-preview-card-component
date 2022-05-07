import './nft-preview.css';


export default function NFTPreview(props) {
    return (
        <div className="nft-preview center">
                <img src={props.img} alt={props.alt}/>
                <div className="image-overlay center">
                    <img src="../images/icon-view.svg" alt="view-icon"/>
                </div>
            <div className="nft-preview-description">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            <div className="nft-preview-details">
                <div className="nft-preview-price">
                    <img src="./images/icon-ethereum.svg" alt="ethereum-icon"/>
                    <h4>{props.price}</h4>
                </div>
                <div className="nft-preview-time">
                    <img className="time-icon" src="./images/icon-clock.svg" alt="clock-icon"/>
                    <p>{props.time}</p>
                </div>
            </div>
            <hr/>
            <div className="nft-preview-artist">
                <img src={props.icon} alt={props.altIcon}/>
                <p>Creation of <a href={props.artistProfile}>{props.artistName}</a></p>
            </div>
        </div>
    );
}
