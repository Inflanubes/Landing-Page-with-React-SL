import React from "react";

const Jumbotron = () => {
    return (

    <div className="jumbotron p-3 mt-5 ">
        <h1 className="display-4 d-flex justify-content-start col-6">A Warm Welcome !</h1>
        <p className="d-flex justify-content-start col-12">It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <div className="pb-5">
        <button type="button" class="btn btn-info d-flex justify-content-start">Push me!</button>
      </div>
    </div>
    );
};

export default Jumbotron;