import "./App.css";
import ImageCard from "./components/ImageCard";
import SearchBar from "./components/SearchBar"; 
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";


function App() {
  const [images, setImages] = useState([]);
  const [item, setItem] = useState("");
  const [page, setpage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [totalImages, settotalImages] = useState(0)

  const nextOne = () => {
    setpage(page + 1);
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
    document.documentElement.scrollTop = 0;
  };

  const prevOne = () => {
    setpage(page - 1);
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${item}&image_type=photo&pretty=true&per_page=21&page=${page}&safesearch=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        settotalImages(data.totalHits);
      })
      .catch((e) => console.log(e));
  }, [page,item]);

  return (
    <div >
      {isLoading ? 
        <div className="pacman">
          <PacmanLoader
            color="#17dae4"
            size={50}
            className="pacmanloader"
          />
        </div>
       : 
        <div className="container">
          <SearchBar searchItem={(input) => setItem(input)}  totalImages={totalImages} pageDefault={(page) => setpage(page)}/>
          <ImageCard images={images} />
          { 
            page===1 ? 
            <div className="pagechange">
              <button className="pagebtn" onClick={nextOne}>Next <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            :(
            page >= totalImages/21 + 1 ? (
              <div className="pagechange">
                <button className="pagebtn" onClick={prevOne}><i className="fa-solid fa-arrow-left"></i> Previous</button>
              </div>
            ) :
            (
            <div className="pagechange">
              <button className="pagebtn" onClick={prevOne}><i className="fa-solid fa-arrow-left"></i> Previous</button>
              <button className="pagebtn" onClick={nextOne}>Next <i className="fa-solid fa-arrow-right"></i></button>
            </div> )
            )
          }
          
        </div>
      }
    </div>
  );
}

export default App;
