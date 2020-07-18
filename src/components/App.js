import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

// function* testing() {
//   while (true) {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

// }

function App() {
  const dispatch = useDispatch();
  // const [list, setList] = useState([]);
  const [isTriggered, setTriggered] = useState(false);
  // const [isLoading, setLoading] = useState(true);
  const {users, isLoading} = useSelector(({ users }) => ({
    users: users.items,
    isLoading: users.isLoading
  }));
  
  useEffect(() => {
    // alert('trigger');
    // setLoading(false);
    dispatch(getUsersRequest());
    
  }, [isLoading])

  function handleSubmit({firstName, lastName}) {
    // console.log('get name', firstName, lastName)
    // dispatch(usersLoading())
    dispatch(createUserRequest({
      firstName,
      lastName
    }))
  }

  function handleDeleteUser(userId){
    setTriggered(!isTriggered)
    console.log('delete user ', userId)
    // call delete user request redux action
    dispatch(deleteUserRequest(userId));
  }
  // const iterator = testing();
  // console.log('iterator ', iterator.next());
  // console.log('iterator ', iterator.next());
  // console.log('iterator ', iterator.next());
  // console.log('iterator ', iterator.next());
  // console.log('users >>> ', users);
  function handleCloseAlert(){
    dispatch(usersError({error: ''}))
  }

  if(isLoading) return <div>loading...</div>

  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
      <Alert color="danger" isOpen={!!users.error} toggle={handleCloseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users}  onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
