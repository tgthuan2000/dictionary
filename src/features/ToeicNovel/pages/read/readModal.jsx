import React from "react";
import PropTypes from "prop-types";
import IModal from "../../../../components/IModal";
const ReadModal = (props) => {
  const { data, paperClass } = props;
  return (
    <IModal {...props}>
      <div className={paperClass}>
        <small>{data}</small>
      </div>
    </IModal>
  );
};

ReadModal.propTypes = {
  data: PropTypes.string,
  paperClass: PropTypes.string,
};

export default ReadModal;
