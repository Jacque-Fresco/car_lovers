import './Backvideo.css';
import backvid from '../videos/back.mp4';

const Backvideo = () => {
    return (
        <div>
            <video autoPlay loop muted id="backvid">
                <source src={backvid} type="video/mp4">
                </source>
            </video>
        </div>
    );
}

export default Backvideo;
