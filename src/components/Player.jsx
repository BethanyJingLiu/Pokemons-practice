const Player = ({ id, name, score }) => {
  return (
    <div>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Player;
