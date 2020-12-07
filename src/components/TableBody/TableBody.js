import React from 'react';
import './TableBody.css';

function TableBody({ picture, name, title, location, isActive, phone, email, about }) {
	const [ isHidden, setIsHidden ] = React.useState(true);

	return (
		<>
			<tr className="tbodyRow">
				<td>
					<img src={picture.thumbnail} alt='person' />
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
               <tr><td>Phone: {phone}</td></tr>
               <tr><td>Email: {email}</td></tr>
               <tr><td>About: {about}</td></tr> 
            </>
         )}
		</>
	);
}

export default TableBody;
