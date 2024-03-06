import { React,useEffect,useState } from 'react';
import ConnectionsComponent from '../components/ConnectionsComponent'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loader from "../components/common/Loader";
import { auth } from "../firebaseConfig";

export default function Connections({ currentUser }) {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
      onAuthStateChanged(auth, (res) => {
        if (!res?.accessToken) {
          navigate("/");
        } else {
          setLoading(false);
        }
      });
    }, []);
    return loading ? <Loader /> : <ConnectionsComponent currentUser={currentUser} />;
  }