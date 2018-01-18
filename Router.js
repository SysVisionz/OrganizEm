import React from 'react';
import firebase from 'firebase';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import { ReduxLoginForm, CheckIfLoggedIn } from './components/common';
import { HomeScreen, EditItem, OrganizerSearch, NewOrganizer, EditOrganizer} from './components';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{paddingTop: 12}}>
			<Scene 
				key="root"
				hideNavBar
			>
				<Scene
					key="loginCheck"
					component={CheckIfLoggedIn}
					initial
				/>
				<Scene key="auth">
					<Scene 
						key="login" 
						component={ ReduxLoginForm } 
						title="Please Login" 
					/>
				</Scene>
				<Scene 
					key="main"
				>
					<Scene
						key="homeScreen"
						component={ HomeScreen }
						title="Organizem"
						rightTitle="Sign Out"
						onRight={() => {
							firebase.auth().signOut()
							.then(() => Actions.auth());
						}}
					/>
					<Scene
						key="organizerSearch"
						component={OrganizerSearch}
						title="Select Organizer"
					/>
					<Scene
						key="newOrganizer"
						component={NewOrganizer}
						title="Create New Organizer"
					/>
					<Scene
						key="editOrganizer"
						component={EditOrganizer}
						title="Edit Organizer"
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;