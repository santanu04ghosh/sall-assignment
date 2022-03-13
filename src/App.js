
import React, {useState, useEffect} from 'react';
import './App.css';
import AllPersonList from './Components/AllPersonList';
import './scss/main.scss'

function App() {

  const url = 'https://randomuser.me/api/?results=10';
  const randomImageUrl = 'https://randomuser.me/api/portraits/men/23.jpg';

  const [isLoading, setIsLoading] = useState(false);
  const[listPersons, setListPersons] = useState([])

  useEffect(() => {
    const getAllUserData = async () => {
      setIsLoading(true);
      const response = await fetch(url)

      if(response.ok){
        const receiveData = await response.json();
        setListPersons(receiveData.results) 
      }else{
        throw new Error('No data found')
      }
      setIsLoading(false);        

    }

    getAllUserData()
  }, [])

  const Loading = () => {
    return <p>Loading....</p>
  }

  console.log(listPersons)

  return (
    <div className="container-fluid">
      <div className='main_container'>
        {isLoading ? <Loading /> : <AllPersonList listPersons = {listPersons}/>}
      </div>
    </div>
  );
}

export default App;
