import { useContext } from 'react';
import { FirebaseContext } from '../../App';

export const useFirestore = (collectionName: string) => {
  let {firestore} = useContext(FirebaseContext);

  return firestore.collection(collectionName);
};
