import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import React from 'react';
import UserContext from '../UserContext'
import Swal from 'sweetalert2';

export default function Logout() {

	const { unsetUser, setUser } = useContext(UserContext);

	Swal.fire({
		title: "Logout Successful",
		icon: "success",
		text: "Come back to Happy Paws!"
	})

	// localStorage.clear();
	// Clear the localStorage of the user's information
	unsetUser();

	// Adding useEffect that will allow the logout page to render first
	useEffect(() => {
		// Set the user state back to it's original value
		setUser({ id: null });
	})

	// Redirect back to login
	return (
		<Navigate to='/login' />
	)
}