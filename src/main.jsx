import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import ErrorPage from './error-page';
import './index.css';
import Root, {
	loader as rootLoader,
	action as rootAction,
} from './routes/root';
import Contact, { loader as contactLoader } from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Root />}
			errorElement={ErrorPage}
			loader={rootLoader}
			action={rootAction}
		>
			<Route
				path="contacts/:contactId"
				element={<Contact />}
				errorElement={ErrorPage}
				loader={contactLoader}
			/>
			<Route
				path="contacts/:contactId/edit"
				element={<EditContact />}
				loader={contactLoader}
				action={editAction}
			/>
			<Route path="contacts/:contactId/destroy" action={destroyAction} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
