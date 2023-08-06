import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTrip } from '../store/slice/tripSlice';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ addTrip }, dispatch);
};
