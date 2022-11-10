import { useState } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import foodsData from '../../foods.json'
import FoodBox from '../FoodBox/FoodBox'
import AddFood from '../AddFood/AddFood'
import SearchForm from '../SearchForm/SearchForm'

// componente responsável por renderizar a lista e da maioria das operações do CRUD
function FoodList() {
    const [foods, setFoods] = useState(foodsData)
    const [search, setSearch] = useState("")
    const [showForm, setShowForm] = useState(false)

    const deleteFood = (selectedFood) => {
        setFoods(foods.filter((food) => {
            return selectedFood !== food.name
        }))

        // setFood(nomeVariavel)
    }

    // por props estamos passando a informação
        //de cada item do array foodsData

        // filtrar o item atual do meu array e vai conferir se o nome do item
            //possui o que está digitado no input do search
    const foodMap = foods
        .filter((food) => (food.name).toLowerCase().includes(search.toLowerCase()))
        .map((food, index) => {
            return <Col key={ index }><FoodBox food={ food } deleteFood={ deleteFood } /></Col>
    })

    return (    
        <Container>
            <Row className='my-4'>
                <Col>
                  <SearchForm
                    search={ search }
                    setSearch={ setSearch }
                />  
                </Col>
                <Col>
                    { showForm && <AddFood foods={ foods } setFoods={ setFoods } /> }
                    <Button variant="outline-info" onClick={() => setShowForm(!showForm)}>Show/Hide Form</Button>
                </Col>
            </Row>
            <Row>
                { foodMap }
                { foods.length === 0 && <Alert variant="secondary">Ops... There's no content to show.</Alert> }
            </Row>
        </Container>
    )
}

export default FoodList