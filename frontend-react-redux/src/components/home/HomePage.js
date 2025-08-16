import videoHomePage from '../../assets/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Lorem ipsum dolor sit amet.
                </div>
                <div className='title-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, enim. heheheaas dhaa</div>
                <div className='title-3'>
                    <button>Get's stated. its free</button>
                </div>
            </div>
        </div >
    )

}

export default HomePage;