import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
    // const [data, setData] = useState(null);

    // const onClick = async () => {
    //     try {
    //         const response = await axios.get(
    //             'https://newsapi.org/v2/top-headlines?country=kr&apiKey=9a0dfcd4abaf434583c6d423de927a57'
    //         );
    //         setData(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // async/await 적용 전

    // const onClick = () => {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/todos/1')
    //         .then((response) => {
    //             setData(response.data);
    //         });
    // };
    return (
        <>
            <Categories />
            <NewsList />
        </>

        // <div>
        //     <div>
        //         <button onClick={onClick}>불러오기</button>
        //     </div>
        //     {data && (
        //         <textarea
        //             rows={7}
        //             value={JSON.stringify(data, null, 2)}
        //             readOnly={true}
        //         />
        //     )}
        // </div>
    );
};

export default App;
