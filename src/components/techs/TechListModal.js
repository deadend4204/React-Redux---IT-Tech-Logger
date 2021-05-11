import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";

import { getTechs } from "../../actions/techActions";
// import Preloader from "../layout/Preloader";

const TechListModal = ({ getTechs, techs, loading }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  //   if (loading) {
  //     return <Preloader />;
  //   }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
