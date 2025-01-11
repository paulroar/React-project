import Listings from './../components/Listings';

function HomePage(){
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello !
            </h1>
            <div>This is the home page</div>
            <Listings />
        </div>
        
    )
}

export default HomePage;