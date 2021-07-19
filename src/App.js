import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [ search, setSearch ] = useState('')
  const [ result, setResult ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const searchData = async (param) => {
    if(param === "")
    {
      setResult([])
      return true;
    }
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${param}&maxResults=6&key=${process.env.REACT_APP_API_KEY}&part=snippet`)
    setResult(response.data.items)
    console.log(response.data.items)
  }

  useEffect(() => {
    searchData(search)
  }, [search])

  return (
    <div>
      <Header />
      <Search search = { search } setSearch= { setSearch } />

      <div className="row py-5">
        { result.map( item =>  {
        return (
          <div className="col-md-4 mb-3">
            <div class="card">
              <img className="card-img-top" src={ item.snippet.thumbnails.medium.url } alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{ item.snippet.title }</h5>
                <p className="card-text">{ item.snippet.description }</p>
                <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} className="btn btn-primary">Visit Video</a>
              </div>
            </div>
          </div>
        )
        })}
      </div>

    </div>
  );
}

export default App;
