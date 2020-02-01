// import React, { Component } from 'react';
// import API from '../utils/API';
// import LoginForm from './LoginForm';
// import Profile from './Favorite';
// import SignupForm from './SignupForm';
// import Alert from '../Alerts/Message';

// export default class UserContainer extends Component {
//   state = {
//     email: '',
//     password: '',
//     password2: '',
//     isSigningUp: false,
//     favoritePokemon: [],
//     alert: false,
//     message: '',
//     alertType: ''
//   };

//   componentDidMount() {
//     const token = localStorage.getItem('token');

//     if (!token) {
//       this.setState({ isSigningUp: false });
//       this.props.setLoggedIn(false);
//     } else {
//       this.setState({ isSigningUp: false });
//       this.props.setLoggedIn(true);
//       this.getFavoritePokemon(localStorage.getItem('userId'));
//     }
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: [e.target.value] });
//   };

//   signup = (email, password) => {
//     this.resetMessage();
//     API.signup(email.toString(), password.toString())
//       .then(res => {
//         this.setState({
//           isSigningUp: false,
//           email: '',
//           password: '',
//           alert: true,
//           message: 'Signup successful...',
//           alertType: 'success'
//         });
//       })
//       .catch(err => {
//         this.setState({
//           alert: true,
//           message: 'Email address already in use...',
//           alertType: 'danger'
//         });
//       });
//   };

//   login = (email, password) => {
//     this.resetMessage();
//     API.login(email.toString(), password.toString())
//       .then(res => {
//         // store the token and userId in local storage
//         window.localStorage.token = res.data.token;
//         window.localStorage.userId = res.data.user._id;

//         this.setState({ email: '', password: '' });
//         this.props.setLoggedIn(true);
//         this.getFavoritePokemon(res.data.user._id);
//       })
//       .catch(err => {
//         this.setState({
//           alert: true,
//           message: 'Email address of password incorrect...',
//           alertType: 'danger'
//         });
//       });
//   };

//   getFavoritePokemon = userId => {
//     const favoritePokemon = [];
//     API.getFavorites(userId)
//       .then(res => {
//         res.data.favorites.forEach(pokemonId => {
//           API.getPokemon(pokemonId)
//             .then(res => {
//               favoritePokemon.push({
//                 name: res.data.name,
//                 url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
//               });
//               this.setState({ favoritePokemon });
//             })
//             .catch(err => {
//               console.log(err);
//             });
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   handleSignup = e => {
//     e.preventDefault();

//     if (JSON.stringify(this.state.password) !== JSON.stringify(this.state.password2)) {
//       this.setState({
//         alert: true,
//         message: 'Passwords must match...',
//         alertType: 'danger'
//       });
//     } else {
//       this.signup(this.state.email, this.state.password);
//     }
//   };

//   handleLogin = e => {
//     e.preventDefault();
//     this.login(this.state.email, this.state.password);
//   };

//   setSigningUp = () => {
//     this.setState({ isSigningUp: true, email: '', password: '' });
//   };

//   cancelSigningUp = () => {
//     this.setState({ isSigningUp: false, email: '', password: '' });
//   };

//   resetMessage = () => {
//     this.setState({ alert: false, message: '', alertType: '' });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         {this.state.alert && (
//           <Alert
//             message={this.state.message}
//             alert={this.state.alertType}
//             resetMessage={this.resetMessage}
//           />
//         )}

//         {this.state.isSigningUp ? (
//           <SignupForm
//             email={this.state.email}
//             password={this.state.password}
//             password2={this.state.password2}
//             handleSignup={this.handleSignup}
//             handleChange={this.handleChange}
//             cancelSigningUp={this.cancelSigningUp}
//           />
//         ) : this.props.isLoggedIn ? (
//           <Profile favoritePokemon={this.state.favoritePokemon} />
//         ) : (
//           <LoginForm
//             email={this.state.email}
//             password={this.state.password}
//             handleLogin={this.handleLogin}
//             handleChange={this.handleChange}
//             setSigningUp={this.setSigningUp}
//           />
//         )}
//       </React.Fragment>
//     );
//   }
// }