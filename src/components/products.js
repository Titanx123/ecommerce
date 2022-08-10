import axios from "axios";
import { useEffect ,useState } from "react";
import "../components/product.css";
// import Popup from "./popup";

const Product = ()=>{
    const [posts,setPosts] = useState();
    useEffect(()=>{
        axios({
            url: "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
            method: "GET",
        }).then((itemdata)=>{
            setPosts(itemdata.data);
            // console.log(itemdata.data.data);
            console.log(itemdata.data);
        })
    },[])
    // const [buttonPopup ,setButtonPopup] = useState(false);
    const [popupcontent,setPopupcontent] = useState([]);
    const changecontent = (item)=>{
        setPopupcontent([item]);
    };

    return (
        <>
            <div className="text-container">
            <p>Available Products</p>

            </div>
        <div className="main-container">
            
        
    {
          (posts) ?
          (
              
            posts.map((item,key)=>{
                return (
                    <div className="data-container">
        
                {/* <img src={item.image_link} alt="err" className="data-pics" onClick={(e)=>setButtonPopup(true)} key={item.id} /> */}
                <img src={item.image_link} alt="err" className="data-pics" onClick={()=> changecontent(item)} key={item.id} />
            
                </div>
                )
            })
                

            
          ) : (<h3>Loading...</h3>)
      }
        
    
    </div>
    {/* <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
        {
            (posts) ?
            (
                posts.map((item)=>{
                    return (
                        <p>{item.id}</p>
                    )
                })
            ) : (<h3>Loading...</h3>)
        }
    </Popup> */}
    <div className="popup-content">
    {
        popupcontent.map((pop)=>{
            return (
                <p>{pop.id}</p>
            )
        })
    }
    </div>
      
        </>
    )
}

export default Product;