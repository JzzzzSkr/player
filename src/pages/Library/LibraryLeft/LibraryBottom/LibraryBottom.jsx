import React from "react";
import "./LibraryBottom.scss";

const LibraryBottom = () => {
  return (
    <div className="lBottomWrapper">
      <h3 style={{marginTop:'1em'}}>Recommend music album</h3>
      <ul className="recommendWrapper">
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec1.jpg" alt=""></img>
            </div>
            <div className="name">Spirited Away Soundtrack</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec2.jpg" alt=""></img>
            </div>
            <div className="name">My Neighbor Totoro Theme</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec4.jpg" alt=""></img>
            </div>
            <div className="name">Princess Mononoke</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec5.jpg" alt=""></img>
            </div>
            <div className="name">Howl's Moving Castle Suite</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec6.jpg" alt=""></img>
            </div>
            <div className="name">Ponyo on the Cliff by the Sea</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec7.jpg" alt=""></img>
            </div>
            <div className="name">The Wind Rises Soundtrack</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec8.jpg" alt=""></img>
            </div>
            <div className="name">Kiki's Relaxing Piano Collection</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec9.jpg" alt=""></img>
            </div>
            <div className="name">Nausicaä of the Valley of the Wind</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec10.jpg" alt=""></img>
            </div>
            <div className="name">Laputa: Castle in the Sky</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec1.jpg" alt=""></img>
            </div>
            <div className="name">Porco Rosso: The Flying Ace</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec1.jpg" alt=""></img>
            </div>
            <div className="name">Whisper of the Heart: Country Road</div>
          </div>
        </li>
        <li>
          <div className="momentBox">
            <div className="list-item">
              <img src="./assets/rec1.jpg" alt=""></img>
            </div>
            <div className="name">Tales from Earthsea: Teru's Song</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LibraryBottom;
