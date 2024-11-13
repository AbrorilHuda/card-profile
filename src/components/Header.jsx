import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <div className="img-area">
      <div className="inner-area">
        <img src={props.gambar} />
      </div>
    </div>
  );
}

Header.propTypes = {
  gambar: PropTypes.string.isRequired,
};
