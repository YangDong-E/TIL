import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';

const App = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);

    return <Route path="/:category?" component={NewsPage} />;

    // async await axios 예시

    // const [data, setData] = useState(null);

    // const onClick = async () => {
    //     try {
    //         const response = await axios.get(
    //             'https://newsapi.org/v2/top-headlines?country=kr&apiKey=9a0dfcd4abaf434583c6d423de927a57',
    //         );
    //         setData(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // // async가 없는 .then을 사용한 비동기
    // // const onClick = () => {
    // //     axios
    // //         .get('https://jsonplaceholder.typicode.com/todos/1')
    // //         .then((response) => {
    // //             setData(response.data);
    // //         });
    // // };
    // return (
    //     <div>
    //         <div>
    //             <button onClick={onClick}>불러오기</button>
    //         </div>
    //         {data && (
    //             <textarea
    //                 rows={7}
    //                 value={JSON.stringify(data, null, 2)}
    //                 readOnly={true}
    //             />
    //         )}
    //     </div>
    // );
};

export default App;
