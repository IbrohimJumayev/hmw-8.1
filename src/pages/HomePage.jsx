import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home -ml-5 mr-5 my-10 px-10 py-10 flex-1">
      <div className="max-w-xl m-auto text-center mt-24">
        <h1 className="text-5xl font-normal">Wellcome to ToDoPy</h1>
        <p className="font-light text-sm mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic
          libero excepturi adipisci, praesentium est dolorum commodi magnam id,
          mollitia quidem, neque ex unde a. Ea hic, eaque eos itaque nihil rerum
          eveniet laboriosam maiores sunt nesciunt minima ipsum. Corrupti at
          neque quod quas fugiat? Sint aliquid facere esse voluptatum culpa,
          pariatur unde eum blanditiis ab? Beatae adipisci obcaecati debitis
          consequatur natus et voluptatem iure aut quae sunt ea autem enim quam,
          numquam amet laboriosam corporis aliquam accusamus quia ut odio
          expedita voluptates atque? Dolorum blanditiis ipsa totam,
          exercitationem reiciendis temporibus quae distinctio provident
          recusandae. Animi vel expedita sequi eligendi.
        </p>
        <button
          onClick={() => navigate("/today")}
          className="rounded-xl bg-green-500 px-10 py-2 mt-10 text-xl font-bold hover:scale-105 duration-300"
        >
          Go to tasks
        </button>
      </div>
    </div>
  );
};

export default HomePage;
