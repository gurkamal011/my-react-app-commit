// import { useState } from 'react';
// import { auth } from '../firebaseConfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("User registered successfully!");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Sign Up</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Signup;