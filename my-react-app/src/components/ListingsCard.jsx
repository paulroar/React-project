function ListingsCard(props){
  const{id, image,} = props;

return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image} alt="" className="w-full"/>
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
                {id}
            </div>
        </div>
    </div>
)

}

export default ListingsCard;