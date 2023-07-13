import React,{useEffect, useState,useRef} from 'react';
import News from './News';

function NewsApp() {
    let [newsList,setNewsList]=useState([]);
    let [query,setQuery]=useState("tesla");

    const apiKey='4761843d285e4780a2aa284f06d3a521';
    let month= new Date().getMonth();
    let year= new Date().getFullYear();
    let date= new Date().getDate();
    const apiUrl=`https://newsapi.org/v2/everything?q=${query}&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=${apiKey}`;
    
    

   
  

    let reference=useRef(null);

    useEffect(()=>
    {
            fetchData();
    },[query]);


    async function fetchData()
    {
        try {
            const response=await fetch(apiUrl);
            const jsonData=await response.json();
            setNewsList(jsonData.articles);
            console.log(jsonData);
        } 
        
        catch (error) {
            alert("some error occured");
            console.log(error);
           
        }
       

    }
    function handleSubmit(event)
    {
        event.preventDefault();
        let input=reference.current.value;
        setQuery(input);
    }
    let appStyle=
    {
        marginLeft:"5%",
        marginTop:"2.5%",
        display:"grid",
        gridTemplateColumns:"repeat(3,30%)",
        gap:"20px",
       
        
        // justifyContents:"space-between",
    }
    let formStyle=
    {
        // border:"2px solid black",
        width:"20%",
        marginLeft:"40%",
        padding:"20px",
    }
  return (
    <div>
        <div style={{backgroundColor:"rgb(5, 51, 51)",height:"180px"}}>
        <form style={formStyle} onSubmit={handleSubmit}>
            <label><h2 style={{color:'bisque',textAlign:"center"}}>News Daily </h2></label>
        <input style={{width:"100%",height:" 30px",padding:"10px"}} type="text" ref={reference} placeholder='search the topic here...'/>
        <button style={{marginTop:"15px",marginLeft:"35%",padding:"2px 2px 2px 2px",height:"30px",width:"60px",}} onClick={handleSubmit}> Search </button>
        </form>
        </div>
        
     <div style={appStyle}>
         {newsList?.map((news)=>
        {
            // return <News news={news}/>
            // console.log(news);
           return <News key={news.url} news={news}/>
           
        })}
        
        </div>
    </div>
  )
}

export default NewsApp;