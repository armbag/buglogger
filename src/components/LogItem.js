import React from 'react'
import Moment from 'react-moment'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const LogItem = ({ log: { priority, text, user, created } }) => {
	const setVariant = () => {
		if (priority === 'high') {
			return 'danger'
		} else if (priority === 'moderate') {
			return 'warning'
		} else {
			return 'success'
		}
	}
	console.log(priority.slice(1))

	return (
		<tr>
			<td>
				<Badge>priority</Badge>
			</td>
			<td>
				<Badge variant={setVariant()} className="p-2">
					{priority.charAt(0).toUpperCase() + priority.slice(1)}
				</Badge>
			</td>
			<td>{text}</td>
			<td>{user}</td>
			<td>
				<Moment format="Do MMM YYYY, h:mm:ss a">{new Date(created)}</Moment>
			</td>
			<td>
				<Button variant="danger" size="sm">
					x
				</Button>
			</td>
		</tr>
	)
}

export default LogItem
