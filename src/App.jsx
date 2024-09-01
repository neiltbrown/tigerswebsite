import { useState } from 'react'
import tigerLogo from './assets/img.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={tigerLogo} className="logo react" alt="Tiger logo" />
        </a>
      </div>
      <h1>Stuff About Tigers</h1>
      <div className="card">
        {/*<button onClick={() => setCount((count) => count + 1)}>*/}
        {/*  count is {count}*/}
        {/*</button>*/}
          <p>
              <h2>General Knowledge About Tigers</h2>
              <div className="content">
                  The tiger is the largest cat in the world. They are also one of the wolds strongest and mightiest predators.
              </div>
              <h2>How A Tiger Works</h2>
              <a href="https://images.app.goo.gl/ojACfN9V6FtE9Xqo9" target="_blank">
                  <img src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg" className="image" alt="Tiger"/>
              </a>
              <div className="content">
                  <ul>
                      <li>
                          <h4>Tail</h4>
                          Provides important information about how the tiger is feeling and what it is planning to do
                      </li>
                      <li>
                          <h4>Coat</h4>
                          Tigers in cold regions have 5 centimetres of long fur on their back and up to 10 centimetres on their stomach. In
                          warm regions their fur ois only 1 centimetre long.
                      </li>
                      <li>
                          <h4>Stripes</h4>
                          A tiger has about 100 stripes. They provide perfect camouflage.
                      </li>
                      <li>
                          <h4>Ears</h4>
                          Tigers have excellent hearing which they use to hunt. They way their ears move shows how they are feeling and what
                          they are planning to do.
                      </li>
                      <li>
                          <h4>Eyes</h4>
                          Sight is one of the most important tools when hunting. At night tigers can see 6 times better than us.
                      </li>
                      <li>
                          <h4>Whiskers</h4>
                          Provides information about the wind direction and air pressure. They act as a feeler for moving around in the
                          dark.
                      </li>
                      <li>
                          <h4>Nose</h4>
                          Can sense different smells from several kilometres away.
                      </li>
                      <li>
                          <h4>Teeth</h4>
                          The four long sharp canine teeth are deadly weapons when the tiger catches prey.
                      </li>
                      <li>
                          <h4>Front Legs</h4>
                          The tiger is incredibly strong and can knock large prey animals with their body weight and powerful front legs.
                      </li>
                      <li>
                          <h4>Claws</h4>
                          Can grow to 10 centimetres and are used to hold down prey and mark their territory.
                      </li>
                      <li>
                          <h4>Paws</h4>
                          Have large paws to help them swim
                      </li>
                  </ul>
              </div>
              <h2>Habitat</h2>
              <div className="content">
                  Tigers used to be found all over Asia. The general belief now is that they are only found in 13 countries but we are not
                  sure if there are any in Vietnam, Laos or Cambodia so there may just be 10 countries they are left in. The terrain tigers
                  live in depends on which species they are because some live in the mountain and some live on flat grassland.
              </div>
              <h2>Diet</h2>
              <div className="content">
                  It depends where the tiger lives but they mainly eat deer, water buffalo and wild boar but they also eat cattle, kumbhi (a
                  fruit commonly found in india). The less common food tigers eat are wild dog, snake, salmon, crocodile, leopard and bears.
              </div>
              <h2>Did You Know?</h2>
              <div className="content">
                  <ul>
                      <li>There are more tigers in the state of Texas than there are in the wild!</li>
                      <li>Each tiger has their own stripe pattern.</li>
                      <li>Tigers are excellent runners and can run up to 65km/h!</li>
                  </ul>
              </div>
          </p>
      </div>
        <p className="read-the-docs">
          Created by Dexter Brown
        </p>
    </>
  )
}

export default App
