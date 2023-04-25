import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUsers} from '../../store';
import Skeleton from '../Skeleton';
import Button from '../Button';
import useThunk from '../Hooks/use-thunk';
import UsersItemList from '../UsersListItem';
function UsersList() {
//   const [isLoadingUsers, setIsLoadingUsers] = useState(false);
//   const [loadingUsersError, setLoadingUsersError] = useState(null);
const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
const [doCreateUser, isCreatingUser, creataingUserError] = useThunk(addUsers);
//   const [isCreatingUser, setIsCreatingUser] = useState(false);
//   const [creataingUserError, setCreatingUserError] = useState(null);
//   const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    // setIsLoadingUsers(true);
    // dispatch(fetchUsers())
    // .unwrap()
    // .catch((err)=>{
    //     setLoadingUsersError(err);
    // })
    // .finally(()=>{
    //     setIsLoadingUsers(false);
    // })
    doFetchUsers()
  }, [doFetchUsers]);
  const handleUserAdd = () =>{
    // setIsCreatingUser(true);
    // dispatch(addUsers())
    // .unwrap()
    // .catch(err=>setCreatingUserError(err))
    // .finally(()=>setIsCreatingUser(false))
    doCreateUser();
  };
  let content;
  if (isLoadingUsers) {
    content = <Skeleton/>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else{
    content = data.map((user) => {
        return <UsersItemList key={user.id} user={user}/>
      });
  }

  return  <div className='flex flex-row justify-between items-center m-3'>
    <div style={{width:'70%'}}>
    <h1 className='m-2 text-xl'>List of Users</h1>
    <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
    {creataingUserError && 'Error creating user...'}
    {content}</div></div>;
}

export default UsersList;