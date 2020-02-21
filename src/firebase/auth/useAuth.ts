import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../App';
import { User } from 'firebase';

export const useAuth = () => {
  let {auth} = useContext(FirebaseContext);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const onAuthStateChanged = auth.onAuthStateChanged(user => setUser(user || undefined));

    return () => onAuthStateChanged();
  }, [auth]);

  return {
    user,
    isSignedIn: user !== undefined,
    signIn: auth.signInWithEmailAndPassword,
    signOut: auth.signOut,
    createUser: auth.createUserWithEmailAndPassword,
    confirmPasswordReset: auth.confirmPasswordReset
  };
};
