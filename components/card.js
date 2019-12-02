const layoutStyle = {
  margin: 16,
  padding: 16,
  border: '1px solid #DDD'
};

const Card = props => (
  <div style={layoutStyle}>
    {props.children}
  </div>
);

export default Card;
