import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
// import formatTag from '../helpers/format-tag';
// import logo from '../helpers/logo';
// import storeTag from '../helpers/store';

type Props = {
    comment: any,
};
// React-17
// const Comment: FunctionComponent= ({comment} :Props) => {

//     return (
//         <div key={comment.id} className="col-9 mx-auto col-md-6">
//             <p>{comment.content}</p>
//         </div>
//     );
// }

// React-18
const Comment= ({comment} :Props) => {

    return (
        <div key={comment.id} className="col-9 mx-auto col-md-6">
            <p>{comment.content}</p>
        </div>
    );
}

export default Comment;