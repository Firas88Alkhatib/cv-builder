import { connect } from "react-redux";
import actions from "../Redux/Actions";
import InputField from "./InputField";
import TextField from "./TextField";
import StartEnd from "./StartEnd";
import ApplicationState from "../Types/ApplicationState";
import RemoveLink from "./RemoveLink";
import { updateEducationAction } from "../Redux/Actions/UpdateEducationAction";
import { mapStateToProps } from "../Redux/ReactRedux";



interface EducationProps {
  cid: number;
  state?: ApplicationState;
}
const Education = ({ cid, state }: EducationProps) => {
  const education = state?.educations.find((item) => item.id === cid);
  return (
    <div className="education container">
      <InputField value={education?.school} cid={cid} label="School" name="school" action={updateEducationAction} />
      <InputField value={education?.degree} cid={cid} label="Degree" name="degree" action={updateEducationAction} />
      <InputField value={education?.city} cid={cid} label="City" name="city" action={updateEducationAction} />
      <StartEnd
        actionType={actions.UPDATE_EDUCATION}
        startDate={education?.startDate}
        endDate={education?.endDate}
        cid={cid}
      />
      <TextField value={education?.description} cid={cid} label="Description" name="description" actionType={actions.UPDATE_EDUCATION}></TextField>
      <RemoveLink actionType={actions.REMOVE_EDUCATION} cid={cid} />
      <div className="break-line"></div>
    </div>
  );
};

export default connect(mapStateToProps)(Education);
