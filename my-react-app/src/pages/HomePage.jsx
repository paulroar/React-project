import ListingsCard from '../components/ListingsCard';

function HomePage(){
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello !
            </h1>
            <div>This is the home page</div>
            <ListingsCard />
        </div>
        
    )
}

export default HomePage;