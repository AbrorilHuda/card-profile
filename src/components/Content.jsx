import PropTypes from "prop-types";
import { data } from "../../data";
export default function Content(props) {
  return (
    <>
      {/* <div className="icon arrow">
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="icon dots">
        <i className="fas fa-ellipsis-v"></i>
      </div> */}
      <div className="name">{props.name}</div>
      <div className="about">{props.university ?? "gak ada"}</div>
      <div className="social-icons">
        {data.map((item, key) => (
          <a href={item.url} className={item.name} key={key}>
            <i className={item.fAwsome}></i>
          </a>
        ))}
      </div>
      <div className="buttons">
        <button>Message</button>
        <button>Github</button>
      </div>
    </>
  );
}
Content.propTypes = {
  university: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

data.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fAwsome: PropTypes.string.isRequired,
};
