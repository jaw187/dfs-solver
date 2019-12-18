const layoutStyle = {
  padding: 24,
  border: '1px solid #DDD',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 17px -5px hsla(0, 0%, 63%, .95)',
  marginRight: 48,
  marginBottom: 16
};

const Card = props => (
  <div style={layoutStyle}>
    {props.children}
  </div>
);

export default Card;
