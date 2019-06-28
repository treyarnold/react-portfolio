import React from "react";

import Button from "../../UI/Button/Button";
import "./About.css";

const about = () => (
  <main>
    <div>
      <h2>
        <strong>Hey. I am Trey</strong>
        <Button title="LinkedIn" />
        <Button title="GitHub" />
      </h2>
    </div>
    <section>
      <p>Full Stack Web Developer with an eye for inter-functionality and breaking down
        problems. Enjoys utilizing experience with client facing roles to clearly convey designs and maintain
        usability as a focus while keeping client needs first.  Passionate about creating function with form and
        approaching challenges from new directions.  Holds communication in high regard; works well when collaborating
        with others or independently.</p>
      <p>I love problem solving.  I take the same approach whether I am in my garage
        making furniture or at my computer coding, I instantly visualize the end result and create breakpoints
        that have to be completed before the next step.  By breaking down large projects into smaller task, a
        workflow is created and milestones set.</p>
      <p>I have experience with JavaScript, CSS, HTML,  Node.js, React, 
        C#,  C++, MongoDB, MySql as well as Express, Bootstrap, Jquery, Unity and semantic UI.  I use the best tool for the job at hand.
        If that means picking up a new language, give me a week or two and I have it down.</p>
    </section>
  </main>
)

export default about;