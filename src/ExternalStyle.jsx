import React from 'react'
import './ExternalStyle.css'


function ExternalStyle() {


    return (
      <div>
        <header className="header">
          <h1>My Website</h1>
        </header>
        <main className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, lorem sit amet bibendum rhoncus, nunc
            libero tincidunt lectus, non vestibulum est libero ac sapien. Proin malesuada purus a sapien interdum
            fermentum. In hac habitasse platea dictumst. Integer euismod efficitur justo non interdum. Nullam in
            sagittis ante. Aliquam mattis metus at sapien dignissim, id congue justo dignissim. Vestibulum bibendum
            auctor mi vitae tempor. Maecenas tincidunt a tellus eget maximus. Sed sed ipsum eu sapien pellentesque
            dictum. Pellentesque euismod auctor elit sed ullamcorper.
          </p>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdigitalsynopsis.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fsupercar-wallpapers-bugatti-3.jpg&f=1&nofb=1&ipt=ce7ac02c5d27a1512df2462b87bb2fac4eb48e8e645864faccd98284308802db&ipo=images" alt="Random Image" />
        </main>
        <footer className="footer">
          <p>© 2023 My Website. All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
 
  export default ExternalStyle
