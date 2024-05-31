import React from "react";



function InternalCss() {

  const headerStyle={color:"red",padding:"20px"}

 const contentStyle = {
    padding: "20px",
    backgroundColor: "wheat",
  };


  const imageStyle = {
    display: "block",
    maxWidth: "100%",
    margin: "20px auto",
  };


  const footerStyle = {
    backgroundColor: "brown",
    padding: "20px",
    textAlign: "center",
    
  };



  return (
    <div>
      <header style={headerStyle}>
        <h1 >My Website</h1>
      </header>
      <main style={contentStyle}>
        <h2 >About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit,
          lorem sit amet bibendum rhoncus, nunc libero tincidunt lectus, non
          vestibulum est libero ac sapien. Proin malesuada purus a sapien
          interdum fermentum. In hac habitasse platea dictumst. Integer euismod
          efficitur justo non interdum. Nullam in sagittis ante. Aliquam mattis
          metus at sapien dignissim, id congue justo dignissim. Vestibulum
          bibendum auctor mi vitae tempor. Maecenas tincidunt a tellus eget
          maximus. Sed sed ipsum eu sapien pellentesque dictum. Pellentesque
          euismod auctor elit sed ullamcorper.
        </p>
        <img
          style={imageStyle}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F244206%2Fpexels-photo-244206.jpeg%3Fcs%3Dsrgb%26dl%3Dasphalt-auto-automobile-244206.jpg%26fm%3Djpg&f=1&nofb=1&ipt=49debb1484e96581d7de08379a5b23c0d919e1126568c01d60db1546afc8a2d1&ipo=images"
          alt="Random Image"
        />
      </main>
      <footer style={footerStyle}>
        <p>© 2023 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}


export default InternalCss;
