import banner from '../../assets/Rectangle 5.png'

const Banner = () => {
    return (
        <div className="container w-full h-[500px] rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to top, #02004378 47%, #00C19D00), url(${banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}></div>
        </div>
    );
};

export default Banner;
