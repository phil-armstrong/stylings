import { useContext } from 'react';
import { FirebaseContext } from '../../App';

export const useStorage = (storageName: string) => {
  let {storage} = useContext(FirebaseContext);

  return storage.ref(storageName)
};
