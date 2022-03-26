import React from 'react'
// Remember to import Ant Design components before using them.
import { Card, Col } from 'antd';

function FoodBox(props) {

    //Another method to destructure since we are passing an entire object instead of just passing props one by one.
    const {name, image, calories, servings} = props.food
  return ( 
    <Col> 
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings} </p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <button onClick={() => {props.handleDeleteFood(name)}} type="primary"> Delete </button>
      </Card>
    </Col>
  )
}

export default FoodBox