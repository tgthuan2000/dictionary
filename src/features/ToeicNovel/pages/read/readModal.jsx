import React from "react";
import PropTypes from "prop-types";
import IModal from "../../../../components/IModal";

const ReadModal = (props) => {
  const { data } = props;
  return (
    <IModal {...props}>
      <small>{data}</small>
    </IModal>
  );
};

ReadModal.propTypes = {
  data: PropTypes.string,
};

export default ReadModal;
