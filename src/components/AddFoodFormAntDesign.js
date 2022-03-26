import React,  { useState } from 'react'
import { Form, Input, Button } from 'antd';

function AddFoodForm({handleAddNewFood}) {

    //states for controlled form elements
    const [foodName, setFoodName] = useState("")
    const [foodImage, setfoodImage] = useState("")
    const [foodCalories, setfoodCalories] = useState(0)
    const [foodServings, setfoodServings] = useState(0)

    const newFoodToAdd = {
        name: foodName,
        image: foodImage,
        calories: foodCalories,
        servings:foodServings
    }

    const resetForm = () => {
        setFoodName("")
        setfoodImage("")
        setfoodCalories(0)
        setfoodServings(0)
    }

    const handleFoodName = (e) => {
        setFoodName(e.target.value)
    }
    const handleFoodImage = (e) => {
        setfoodImage(e.target.value)
    }
    const handleFoodCalories = (e) => {
        setfoodCalories(e.target.value)
    }

  return (
    //   You can have empty <> tags instead of <div> for better performance. They are called react fragments. 
    <>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            // onFinish={}

            autoComplete="off"
        >
            {/* Do not get confused with this, I am using antdesign forms */}
            <Form.Item
                label="name"
                name="name"
                value={foodName}
                type="text"
                onChange={handleFoodName}
                rules={[
                {
                    required: true,
                    message: 'Please input the name!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="image"
                name="image"
                value={foodImage}
                type="text"
                onChange={handleFoodImage}
                rules={[
                {
                    required: true,
                    message: 'Please input the name!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="calories"
                name="calories"
                value={foodCalories}
                type="number"
                onChange={handleFoodCalories}
                rules={[
                {
                    required: true,
                    message: 'Please input the name!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            {/* You can also define an anonymous function to set the value of state instead defining a function seperately as for below input */}

            <Form.Item
                label="servings"
                name="servings"
                value={foodServings}
                type="number"
                onChange={(e) => {
                    setfoodServings(e.target.value)
                }}
                rules={[
                {
                    required: true,
                    message: 'Please input the name!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" onClick={
                (e) => {
                handleAddNewFood(e, newFoodToAdd)
                resetForm()
            }
            }>
                Submit
            </Button>
        </Form>
    </>
  )
}

export default AddFoodForm