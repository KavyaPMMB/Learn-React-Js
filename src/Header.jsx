import React from "react";
import headercss from  './Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headercss.head}>Lorem ipsum dolor sit amet.</h1>
      <h5 className={headercss.head2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro aut
        necessitatibus at. Corporis alias praesentium quae delectus eos nulla,
        necessitatibus quidem voluptatem placeat, cumque quia ratione obcaecati!
        Ducimus quam repellat eveniet dignissimos similique molestias numquam
        culpa nesciunt. Voluptate cumque perferendis odit odio non corrupti ad
        eum molestiae rem animi incidunt reprehenderit soluta fugit consectetur,
        accusamus excepturi quam laudantium officia nisi sunt quas dolor!
        Distinctio, deleniti qui adipisci autem facilis illo quidem? Praesentium
        distinctio culpa sunt. Aliquam, dolores in! Nam quo voluptatum minima
        possimus, fugiat rem, ullam dolorem error deserunt eum officia fugit
        nulla eos praesentium autem nostrum asperiores! Delectus?
      </h5>
    </div>
  );
};

export default Header;
