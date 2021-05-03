import { connect } from "react-redux";
import ApplicationState from "../Types/ApplicationState";
import actions from "../Redux/Actions";
import AddLink from "./AddLink";
import Skill from "./Skill";
import { mapStateToProps } from "../Redux/ReactRedux";

const Skills = ({ state }: { state: ApplicationState }) => {
  return (
    <div>
      <h2>Skills</h2>
      <div className="skills section">
        {state.skills.map((item) => {
          return <Skill key={item.id} cid={item.id} />;
        })}
        <AddLink label="Add Skill" actionType={actions.ADD_SKILL} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Skills);
