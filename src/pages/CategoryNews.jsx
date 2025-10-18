
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../components/NewsCart';

const CategoryNews = () => {
   
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews,setCategoryNews] = useState([]);

   
    useEffect(()=>{
     if(id == "0"){
        setCategoryNews(data);
        
     }else if(id == "1"){
        const filteredNews = data.filter(news=> news.others.is_today_pick == true);
        setCategoryNews(filteredNews)
     }else{
          const filteredNews = data.filter(news=> news.category_id == id);
        setCategoryNews(filteredNews)
     }
        
    },[data,id]);
    return (
        <div>
            <h2 className='font-bold mb-3'>Total <span className='text-secondary'> {categoryNews.length}</span> news found</h2>

            <div className='grid grid-cols-1 gap-3'>
        {
            categoryNews.map(news => <NewsCart key={news.id} news={news}></NewsCart>)
        }
            </div>
        </div>

       
    );
};

export default CategoryNews;