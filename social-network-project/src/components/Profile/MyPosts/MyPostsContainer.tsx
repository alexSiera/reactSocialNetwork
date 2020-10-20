import { connect } from 'react-redux';
import { actions } from '../../../Redux/reducers/profileReducer';
import MyPosts from './MyPosts';
import { AppStateType } from '../../../Redux/reduxStore';

const mapStateToProps = (state: AppStateType): typeof state.profilePage => state.profilePage;

export default connect(mapStateToProps, {
  addPost: actions.addPostAC,
})(MyPosts);
