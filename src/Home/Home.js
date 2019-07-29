import React , {Component} from 'react';
import "./style1.css";

class Home extends Component {
  render(){
    return (
      <div>
        <p className = "title">Basketball, a lifestyle.</p>
        <img src="https://i.pinimg.com/originals/81/07/1a/81071aaae5afde1485d483487ea8459a.png"/>
        <p className = 'para'>The history of basketball began with its invention in 1891 <br/> in Springfield, Massachusetts by Canadian physical education <br/> instructor James Naismith as a less injury-prone sport <br/> than football. The game became established fairly quickly <br/>  and grew very popular as the 20th century progressed, first <br/> in America and  then in other parts of the world. After basketball <br/> became established  in American colleges, the professional <br/> game followed. The American  National Basketball Association <br/> (NBA), established in 1946, grew  to a multibillion-dollar <br/> enterprise by the end of the century, and  basketball became <br/>  an integral part of American culture.</p>
      </div>
    );
  }
}

export default Home;