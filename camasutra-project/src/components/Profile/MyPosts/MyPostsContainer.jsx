import { actions } from '../../../Redux/reducers/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state.profilePage;

export default connect(mapStateToProps, {
    addPost: actions.addPostAC,
})(MyPosts);
