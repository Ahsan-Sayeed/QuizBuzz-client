import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const QuizContainer = () => {
    const {id} = useParams();
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            This is quiz container {id}
        </div>
    );
};

export default QuizContainer;