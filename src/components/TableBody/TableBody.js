import React from 'react';
import './TableBody.css';

function TableBody({ picture, name, title, location, isActive, phone, email, about }) {
	const [ isHidden, setIsHidden ] = React.useState(true);

	return (
		<>
			<tr className="tbodyRow">
				<td>
               {picture.thumbnail? <img src={picture.thumbnail} alt={name}/> : <img src='http://placehold.it/50x50' alt='placeholder'/>}
					
				</td>
				<td>{name}</td>
				<td>{title}</td>
				<td>{location}</td>
				<td>{isActive ? 'Available' : 'Out of Office'}</td>
				<td>
					<button onClick={() => setIsHidden(!isHidden)} type='submit'>
						{isHidden ? 'more' : 'less'}
					</button>
				</td>
			</tr>
         {!isHidden && (
            <>
               <tr className="moreInfo"><td><strong>Phone: </strong> {phone}</td></tr>
               <tr className="moreInfo"><td><strong>Email: </strong> {email}</td></tr>
               <tr className="moreInfo"><td><strong>About: </strong> {about}</td></tr> 
            </>
         )}
		</>
	);
}

export default TableBody;
