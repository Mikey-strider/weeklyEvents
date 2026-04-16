function modifyContent() {
  const weeklyEvents = document.querySelector(".content");

    weeklyEvents.innerHTML = `
      <h2>Weekly events:</h2>

      <h3>Current Events</h3>
          <div class="current-placement">
            <ul class="event-carousel">
              <li class="current-carousel" data-accName="Item 1">
                <h2>Page 1</h2>
              </li>
              <li class="current-carousel" data-accName="Item 2">
                <h2>Page 2</h2>
              </li>
              <li class="current-carousel" data-accName="Item 3">
                <h2>Page 3</h2>
              </li>
              <li class="current-carousel" data-accName="Item 4">
                <h2>Page 4</h2>
              </li>
            </ul>
          </div>

      <ul class="this-week">
        <li id="monday" class="week-day">
          <h3 class="day-title">Monday</h3>
          <img class="event-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/pillows4-13-288x360.jpg">
        </li>
        <li id="wednesday" class="week-day">
          <h3 class="day-title">Wednesday</h3>
          <img class="event-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/DMBoysTApril-278x360.jpg">
        </li>
        <li id="thursday" class="week-day">
          <h3 class="day-title">Thursday</h3>
          <img class="event-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/UP4-16-262x360.jpg">
        </li>
        <li id="friday" class="week-day">
          <h3 class="day-title">Friday</h3>
          <img class="event-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/tradeapril-278x360.jpg">
        </li>
        <li id="saturday-happy-hour" class="week-day">
          <h3 class="day-title">Saturday Happy hour</h3>
          <img class="event-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/chubapril-278x360.jpg">
        </li><li id="saturday-evening" class="week-day">
          <h3 class="day-title">Saturday Evening</h3>
          <img class="event-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/BPapril-280x360.jpg">
        </li>
        <li id="sunday" class="week-day">
          <h3 class="day-title">Sunday</h3>
          <img class="event-img" src="https://powerhousebar.com/wp-content/uploads/2026/04/cgateapril2-203x360.jpg">
        </li>
        <li id="future-events" class="week-day">
          <h3>Future Events</h3>
          <div class="future-placement">
            <ul class="future-carousel">
              <li class="future-image" data-accName="Item 1">
                <h2>Page 1</h2>
              </li>
              <li class="future-image" data-accName="Item 2">
                <h2>Page 2</h2>
              </li>
              <li class="future-image" data-accName="Item 3">
                <h2>Page 3</h2>
              </li>
              <li class="future-image" data-accName="Item 4">
                <h2>Page 4</h2>
              </li>
            </ul>
          </div>
        </li>
      </ul>
  `;


  const style = document.createElement("style");
  style.innerHTML = `
  @imports url('https://fonsts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: center;
    min-height: 100vh;
  }

  .content {
        background-image: linear-gradient(to bottom right, #000000d6 30%, #000000c0 50%);
  }

  h2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #ff0303;
  }

  h3 {
    color: #ff4040;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
  }

  .day-title {
    color: #ff4040;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    background-color: #10101021;
    border-radius: 5px;
    box-shadow: 4px 4px 7px #101010bd
  }

   li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: center;
  }

  .event-img {
    padding: 2px;
    margin: 10px;
    border: 2px solid red;
    height: 425px;
    width: 285px;
  }


  .event-carousel {
    width: 100vw;
    height: 300px;
    padding: 20px;
    display: flex;
    gap: 4vw;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    anchor-name: --event-carousel;
  }

  .event-carousel::scroll-button(*) {
    border: 0;
    font-size: 2rem;
    background: none;
    color: black;
    opacity: 0.7;
    cursor: pointer;
    position: absolute;
    position-anchor: --event-carousel;
  }

  .event-carousel::scroll-button(*):hover, 
    .event-carousel::scroll-button(*):focus {
      opacity: 1;
  }

  .event-carousel::scroll-button(*):active {
    translate: 1px 1px;
  }

  .event-carousel::scroll-button(*):disabled {
    opacity: 0.2;
    cursor: unset;
  }

  .event-carousel::scroll-button(left) {
    content: "◄" / "Previous";
    right: calc(anchor(left) - 70px);
    bottom: calc(anchor(top) + 13px);
  }

  .event-carousel::scroll-button(right) {
    content: "►" / "Next";
    left: calc(anchor(right) - 70px);
    bottom: calc(anchor(top) + 13px);
  }



  .current-carousel {
    scroll-snap-align: center;
    list-style-type: none;
    background-color: #eeeeee;
    border: 1px solid #dddddd;
    padding: 20px;
    flex: 0 0 100%;
  }

  .current-carousel:nth-child(even) {
    background-color: cyan;
  }


  .future-carousel {
    width: 100vw;
    height: 300px;
    padding: 20px;
    display: flex;
    gap: 4vw;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    anchor-name: --future-carousel;
  }

  .future-carousel::scroll-button(*) {
    border: 0;
    font-size: 2rem;
    background: none;
    color: black;
    opacity: 0.7;
    cursor: pointer;
    position: absolute;
    position-anchor: --future-carousel;
  }

  .future-carousel::scroll-button(*):hover, 
    .future-carousel::scroll-button(*):focus {
      opacity: 1;
  }

  .future-carousel::scroll-button(*):active {
    translate: 1px 1px;
  }

  .future-carousel::scroll-button(*):disabled {
    opacity: 0.2;
    cursor: unset;
  }

  .future-carousel::scroll-button(left) {
    content: "◄" / "Previous";
    right: calc(anchor(left) - 70px);
    bottom: calc(anchor(top) + 13px);
  }

  .future-carousel::scroll-button(right) {
    content: "►" / "Next";
    left: calc(anchor(right) - 70px);
    bottom: calc(anchor(top) + 13px);
  }



  .future-image {
    scroll-snap-align: center;
    list-style-type: none;
    background-color: #eeeeee;
    border: 1px solid #dddddd;
    padding: 20px;
    flex: 0 0 100%;
  }

  .future-image:nth-child(even) {
    background-color: cyan;
  }

   `;
  document.head.appendChild(style);


};
window.addEventListener('DOMContentLoaded', modifyContent);
