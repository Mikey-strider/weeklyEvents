function modifyContent() {
  const weeklyEvents = document.querySelector(".content");

    weeklyEvents.innerHTML = `
      <h2>Weekly events</h2>
      <ul class="this-week">
        <li id="monday" class="week-day">
          <h3>Monday</h3>
          <img src="">
        </li>
        <li id="tuesday" class="week-day">
          <h3>Tuesday</h3>
          <img src="">
        </li>
        <li id="wednesday" class="week-day">
          <h3>Wednesday</h3>
          <img src="">
        </li>
        <li id="thursday" class="week-day">
          <h3>Thursday</h3>
          <img src="">
        </li>
        <li id="friday" class="week-day">
          <h3>Friday</h3>
          <img src="">
        </li>
        <li id="saturday" class="week-day">
          <h3>Saturday</h3>
          <img src="">
        </li>
        <li id="sunday" class="week-day">
          <h3>Sunday</h3>
          <img src="">
        </li>
        <li id="future-events" class="week-day">
          <h3>Future Events</h3>
          <div class="place-future-events">
            
          </div>
        </li>
      </ul>
  `;


};
window.addEventListener('DOMContentLoaded', modifyContent);
