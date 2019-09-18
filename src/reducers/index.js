import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import WordListReducers from './WordCreateReducer';
import WordDataReducers from './WordDataReducers';
import WordUpdateReducers from './WordUpdateReducers';

export default combineReducers({
   kimlikdogrulamaResponse: kimlikdogrulamaReducers,
   wordListResponse: WordListReducers,
   wordDataResponse: WordDataReducers,
   wordUpdateResponse: WordUpdateReducers
});
