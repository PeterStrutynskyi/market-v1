import { compose, withHandlers } from 'recompose';
import ModalView from "./ModalView";


const enhancer = compose(
  withHandlers({
    back: (props) => (e) => {
      e.stopPropagation();
      props.history.goBack();
    },
  }),
);

export default enhancer(ModalView);
