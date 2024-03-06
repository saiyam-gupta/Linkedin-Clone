import React,{ useMemo,useState} from 'react';
import Profile from '../Pages/Profile';
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from '../api/FireStoreAPI';


export default function ProfileLayout() {
  const [currentUser,setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  },[])
  return (
    <div>
        <Topbar currentUser={currentUser}/>
        <Profile currentUser={currentUser} / >
    </div>
  )
}
