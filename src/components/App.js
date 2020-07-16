import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersRequest } from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
// function* testing() {
//   while (true) {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

// }

function App() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const users = useSelector(({ users }) => users);

  useEffect(() => {
    dispatch(getUsersRequest());

  }, [])

  function handleSubmit(firstName, lastName) {
    console.log('get name', firstName, lastName)
  }
  // const iterator = testing();
  // console.log('iterator ', iterator.next());
  // console.log('iterator ', iterator.next());
  // console.log('iterator ', iterator.next());
  // console.log('iterator ', iterator.next());
  console.log('users >>> ', users);

  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} />
    </div>
  );
}

export default App;
