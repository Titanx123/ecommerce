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
    const [popuptoggle,setpopuptoggle] = useState(false);
    // const [styling,setstyling] = useState(null);
    const changecontent = (item)=>{
        setPopupcontent([item]);
        setpopuptoggle(!popuptoggle);
        // if(styling === null){
        //     setstyling({position:"fixed"})
        // }else{
        //     setstyling(null);
        // }
    };

    return (
        <>
        <div>
            <div className="text-container">
            <p>Available Products</p>

            </div>
        <div className="main-container" >
            
        
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
    
    {popuptoggle &&<div className="pop_up_container">
        <div className="pop_up_body" >

        <div className="pop_up_header">
            <button onClick={changecontent}>CLOSE</button>
        </div>
    <div className="popup-content">
    {
        popupcontent.map((pop)=>{
            return (
                <div>
                    <img src={pop.image_link} alt="err"/>
                    <p>{pop.description}</p>

                </div>
            )
        })
    }
    </div>
        </div>
    </div>}
      </div>
        </>
    )
}

export default Product;