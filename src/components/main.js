import React, { useState } from "react";
import Cards from "./cards";
import Logo from "../Layout/images/logo.png"
import'./style.css';

import {Link} from 'react-router-dom'
import axios from "axios";

const Main=()=>{

const [searchTerm, setSearchTerm] = useState("");
const [bookData, setData]=useState([]);

const searchBook=(evt)=>{


    if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+searchTerm+
            '&key=AIzaSyDvNlfq9h4XDbIOjZbFEaBhRhp_0D_mCFc'+'&maxResults=20')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
}

return(
<div className="background">
<div className="container">
    

<Link  to="/components/favorite" class="favorite_button">Favorite Books</Link>

<div className="title"><h1><img src={Logo} alt="logo" /> DIGITAL BOOK</h1></div>

<div className="subtitle"><h2>Enjoy All Diffrent Kind of Books Here!!</h2></div>

<div className="search">
<input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
onKeyPress={searchBook}/>
</div>


<div class="b_container">
{
<Cards book={bookData} />
}
</div>

</div>
</div>
)

}

export default Main;