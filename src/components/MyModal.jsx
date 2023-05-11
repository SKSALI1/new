function MyPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <p>{props.message}</p>
      </div>
    </div>
  );
}
export default MyPopup;