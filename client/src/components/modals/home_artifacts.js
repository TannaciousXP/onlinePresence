import React, { Comopnent } from 'react';

import {
  Modal,
  Button,
  Image,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions';

class Artifacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { isModalOpen, renderModal, clsoeModal } = this.props;
    return (
      <div>testing</div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: state.isModalOpen,
    renderModal: state.renderModal,
    clsoeModal: ownProps.closeModal
  };
};

export default connect(mapStateToProps, {closeModal})(Artifacts);
