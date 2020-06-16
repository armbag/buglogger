import React from 'react'

const LogItem = (props) => {
	const { user, text, priority, created } = props.detail

	return (
		<tr>
			<td>{priority}</td>
			<td>{text}</td>
			<td>{user}</td>
			<td>{created}</td>
			<td>{}</td>
		</tr>
	)
}

export default LogItem
