import { useFetchAlbumsQuery, useAddAlbumMutation } from "../../store";
import Skeleton from "../Skeleton";
import Button from "../Button";
import AlbumsListItem from "../AlbumListItem";
function AlbumsList({user}){
    const { data, error, isLoading }=useFetchAlbumsQuery(user);
    const [addAlbum, result] = useAddAlbumMutation();
    const handleAddClick = ()=>{
        addAlbum(user);
    }
    let content;
    if(isLoading){
        content = <Skeleton/>
    }else if(error){
        content = <div>Error loading album..</div>
    }else{
        content = data.map(album =>{
            return <AlbumsListItem key={album.id} album={album}/>
        })
    }
    return(<div>
        <div className="m-2 flex- flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>
            <Button loading={result.isLoading} onClick={handleAddClick}>
                +Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>)
}
export default AlbumsList;