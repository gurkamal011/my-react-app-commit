// import { useState } from 'react';
// //import { auth } from '../firebaseConfig';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, googleProvider } from '../firebaseConfig'; // Path to your firebase config file
// import { signInWithPopup } from 'firebase/auth';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("User logged in successfully!");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

  
//     const handleGoogleLogin = async () => {
//       try {
//         const result = await signInWithPopup(auth, googleProvider);
//         const user = result.user;
//         console.log("User Details:", user);  // Display user info in console
//         alert(`Logged in as ${user.displayName}`);
//       } catch (error) {
//         console.error("Error during sign-in:", error.message);
//       }
//     };

//   return (
//     <form onSubmit={handleLogin}>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//       <button onClick={handleGoogleLogin}>
//         Sign in with Google
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;