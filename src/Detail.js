import { useParams } from "react-router-dom";

function Detail() {
  let params = useParams();

  return (
    <div>
      <p>Detail</p>
      <p>{params.id}</p>
    </div>
  );
}

export default Detail;
