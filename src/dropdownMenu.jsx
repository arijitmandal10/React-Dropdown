import React, { useState } from 'react';

const DropdownMenu = () => {
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div className='container'>
			<h1>Should you use a dropdown?</h1>

			<div>
				<select value={selectedOption} onChange={handleOptionChange}>
					{' '}
					{selectedOption ? selectedOption : <option value=''>-Select-</option>}
					<option value='option1'>Yes</option>
					<option value='option2'>Probably not</option>
					<option value='option3'>Why not?</option>
				</select>
			</div>
		</div>
	);
};

export default DropdownMenu;
