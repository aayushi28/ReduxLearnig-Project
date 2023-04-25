import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "./Hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./List/AlbumsList";
function UsersItemList({user}){
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const handleClick = () =>{
        doRemoveUser(user);
    }
    const header = <>
        <Button loading={isLoading} onClick={handleClick}>
                    <GoTrashcan/>
                </Button>
                {error && <div>Error deleting user</div>}
              {user.name}
    </>
    return (
         <ExpandablePanel header={header}><AlbumsList user={user}/></ExpandablePanel>
    )
}

export default UsersItemList;