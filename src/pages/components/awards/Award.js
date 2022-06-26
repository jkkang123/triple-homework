import "./Award.css";

export default function Award(props) {
  const { label, image, alt } = props;

  return (
    <div className="award">
      <img className="award-image" src={image} alt={alt} />
      <div className="award-label">{label}</div>
    </div>
  );
}
